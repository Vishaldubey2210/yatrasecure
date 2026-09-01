import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {
  // Base rates relative to INR
  private readonly ratesToINR: Record<string, number> = {
    INR: 1.0,
    USD: 86.5,
    EUR: 91.2,
    GBP: 109.8,
    AED: 23.55,
    THB: 2.45,
    JPY: 0.58,
    SGD: 64.2,
  };

  convert(amount: number, fromCurrency: string, toCurrency: string): number {
    const fromRate = this.ratesToINR[fromCurrency.toUpperCase()] || 1.0;
    const toRate = this.ratesToINR[toCurrency.toUpperCase()] || 1.0;

    const amountInINR = amount * fromRate;
    const converted = amountInINR / toRate;
    return Number(converted.toFixed(2));
  }

  getSupportedCurrencies(): string[] {
    return Object.keys(this.ratesToINR);
  }

  getExchangeRates(baseCurrency: string = 'INR'): Record<string, number> {
    const baseRate = this.ratesToINR[baseCurrency.toUpperCase()] || 1.0;
    const result: Record<string, number> = {};

    for (const [curr, rate] of Object.entries(this.ratesToINR)) {
      result[curr] = Number((rate / baseRate).toFixed(4));
    }
    return result;
  }
}
