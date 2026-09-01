import { Injectable } from '@nestjs/common';
import { DebtSimplificationService, SimplifiedTransaction } from './debt-simplification.service';

export interface ExpenseRecord {
  paidBy: string;
  amount: number;
  participants: { userId: string; share: number }[];
}

@Injectable()
export class SettlementService {
  constructor(private readonly debtSimplifier: DebtSimplificationService) {}

  calculateTripSettlements(expenses: ExpenseRecord[], allMemberIds: string[]): {
    balances: Record<string, number>;
    simplifiedSettlements: SimplifiedTransaction[];
  } {
    const balances: Record<string, number> = {};
    for (const id of allMemberIds) {
      balances[id] = 0;
    }

    for (const exp of expenses) {
      balances[exp.paidBy] = (balances[exp.paidBy] || 0) + exp.amount;
      for (const p of exp.participants) {
        balances[p.userId] = (balances[p.userId] || 0) - p.share;
      }
    }

    const participantBalances = Object.entries(balances).map(([userId, netBalance]) => ({
      userId,
      netBalance,
    }));

    const simplifiedSettlements = this.debtSimplifier.simplifyDebts(participantBalances);

    return {
      balances,
      simplifiedSettlements,
    };
  }
}
