import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    service = new WeatherService();
  });

  it('should return valid forecast with recommendation for given city', async () => {
    const forecast = await service.getForecast('Manali');
    expect(forecast.city).toBe('Manali');
    expect(forecast.tempC).toBeDefined();
    expect(forecast.recommendation).toBeDefined();
  });
});
