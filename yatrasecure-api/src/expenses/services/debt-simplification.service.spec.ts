import { DebtSimplificationService } from './debt-simplification.service';

describe('DebtSimplificationService', () => {
  let service: DebtSimplificationService;

  beforeEach(() => {
    service = new DebtSimplificationService();
  });

  it('should simplify circular debts between 3 users', () => {
    const balances = [
      { userId: 'userA', netBalance: 100 },
      { userId: 'userB', netBalance: -40 },
      { userId: 'userC', netBalance: -60 },
    ];

    const settlements = service.simplifyDebts(balances);
    expect(settlements).toHaveLength(2);

    const totalSettled = settlements.reduce((sum, s) => sum + s.amount, 0);
    expect(totalSettled).toBe(100);
  });

  it('should return empty list when balances are all zero', () => {
    const balances = [
      { userId: 'userA', netBalance: 0 },
      { userId: 'userB', netBalance: 0 },
    ];
    const settlements = service.simplifyDebts(balances);
    expect(settlements).toHaveLength(0);
  });
});
