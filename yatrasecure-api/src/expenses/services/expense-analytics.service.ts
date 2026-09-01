import { Injectable } from '@nestjs/common';

export interface ExpenseSummaryItem {
  category: string;
  totalAmount: number;
  percentage: number;
  count: number;
}

@Injectable()
export class ExpenseAnalyticsService {
  analyzeCategories(expenses: { category?: string; amount: number }[]): {
    totalSpent: number;
    categories: ExpenseSummaryItem[];
  } {
    const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const categoryMap: Record<string, { total: number; count: number }> = {};

    for (const exp of expenses) {
      const cat = exp.category || 'other';
      if (!categoryMap[cat]) {
        categoryMap[cat] = { total: 0, count: 0 };
      }
      categoryMap[cat].total += exp.amount;
      categoryMap[cat].count += 1;
    }

    const categories = Object.entries(categoryMap).map(([category, info]) => ({
      category,
      totalAmount: Number(info.total.toFixed(2)),
      count: info.count,
      percentage: totalSpent > 0 ? Number(((info.total / totalSpent) * 100).toFixed(1)) : 0,
    }));

    categories.sort((a, b) => b.totalAmount - a.totalAmount);

    return {
      totalSpent: Number(totalSpent.toFixed(2)),
      categories,
    };
  }
}
