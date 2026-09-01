import { Injectable } from '@nestjs/common';

export interface ParticipantBalance {
  userId: string;
  name?: string;
  netBalance: number; // positive = creditor, negative = debtor
}

export interface SimplifiedTransaction {
  fromUserId: string;
  toUserId: string;
  amount: number;
}

@Injectable()
export class DebtSimplificationService {
  /**
   * Computes minimal settlements from net balances using greedy graph reduction
   */
  simplifyDebts(balances: ParticipantBalance[]): SimplifiedTransaction[] {
    const debtors: { userId: string; debt: number }[] = [];
    const creditors: { userId: string; credit: number }[] = [];

    // Separate into debtors and creditors
    for (const b of balances) {
      const net = Number(b.netBalance.toFixed(2));
      if (net < -0.01) {
        debtors.push({ userId: b.userId, debt: -net });
      } else if (net > 0.01) {
        creditors.push({ userId: b.userId, credit: net });
      }
    }

    // Sort descending by debt and credit amount
    debtors.sort((a, b) => b.debt - a.debt);
    creditors.sort((a, b) => b.credit - a.credit);

    const transactions: SimplifiedTransaction[] = [];
    let dIdx = 0;
    let cIdx = 0;

    while (dIdx < debtors.length && cIdx < creditors.length) {
      const debtor = debtors[dIdx];
      const creditor = creditors[cIdx];

      const settleAmount = Math.min(debtor.debt, creditor.credit);
      const roundedAmount = Number(settleAmount.toFixed(2));

      if (roundedAmount > 0) {
        transactions.push({
          fromUserId: debtor.userId,
          toUserId: creditor.userId,
          amount: roundedAmount,
        });
      }

      debtor.debt -= settleAmount;
      creditor.credit -= settleAmount;

      if (debtor.debt < 0.01) dIdx++;
      if (creditor.credit < 0.01) cIdx++;
    }

    return transactions;
  }
}
