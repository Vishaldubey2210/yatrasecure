import { ClimateAdvisoryService } from './climate-advisory.service';
import { WeatherService } from './weather.service';

describe('ClimateAdvisoryService', () => {
  let service: ClimateAdvisoryService;

  beforeEach(() => {
    const weatherService = new WeatherService();
    service = new ClimateAdvisoryService(weatherService);
  });

  it('should evaluate destination advisory and return forecast details', async () => {
    const result = await service.evaluateAdvisory('Goa');
    expect(result.forecast).toBeDefined();
    expect(typeof result.hasAlert).toBe('boolean');
  });
});
