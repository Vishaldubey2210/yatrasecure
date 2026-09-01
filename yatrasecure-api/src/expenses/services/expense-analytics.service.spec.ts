import { ExpenseAnalyticsService } from './expense-analytics.service';

describe('ExpenseAnalyticsService', () => {
  let service: ExpenseAnalyticsService;

  beforeEach(() => {
    service = new ExpenseAnalyticsService();
  });

  it('should compute category breakdown and percentages', () => {
    const expenses = [
      { category: 'food', amount: 500 },
      { category: 'stay', amount: 1500 },
    ];

    const analytics = service.analyzeCategories(expenses);
    expect(analytics.totalSpent).toBe(2000);
    expect(analytics.categories).toHaveLength(2);
    expect(analytics.categories[0].category).toBe('stay');
    expect(analytics.categories[0].percentage).toBe(75);
  });
});
