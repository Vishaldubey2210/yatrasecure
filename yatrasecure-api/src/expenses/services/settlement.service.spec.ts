import { SettlementService } from './settlement.service';
import { DebtSimplificationService } from './debt-simplification.service';

describe('SettlementService', () => {
  let service: SettlementService;

  beforeEach(() => {
    const debtSimplifier = new DebtSimplificationService();
    service = new SettlementService(debtSimplifier);
  });

  it('should compute net balances from list of expenses', () => {
    const expenses = [
      {
        paidBy: 'user1',
        amount: 300,
        participants: [
          { userId: 'user1', share: 100 },
          { userId: 'user2', share: 100 },
          { userId: 'user3', share: 100 },
        ],
      },
    ];

    const result = service.calculateTripSettlements(expenses, ['user1', 'user2', 'user3']);
    expect(result.balances['user1']).toBe(200);
    expect(result.balances['user2']).toBe(-100);
    expect(result.balances['user3']).toBe(-100);
    expect(result.simplifiedSettlements.length).toBe(2);
  });
});
