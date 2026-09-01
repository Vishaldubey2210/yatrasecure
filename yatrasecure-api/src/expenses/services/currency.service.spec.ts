import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    service = new CurrencyService();
  });

  it('should convert USD to INR correctly', () => {
    const converted = service.convert(100, 'USD', 'INR');
    expect(converted).toBe(8650);
  });

  it('should convert INR to USD correctly', () => {
    const converted = service.convert(8650, 'INR', 'USD');
    expect(converted).toBe(100);
  });

  it('should return exchange rates for supported currencies', () => {
    const rates = service.getExchangeRates('USD');
    expect(rates.USD).toBe(1);
    expect(rates.INR).toBeDefined();
  });
});
