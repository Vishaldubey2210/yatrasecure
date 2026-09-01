import { Injectable } from '@nestjs/common';
import { WeatherService, WeatherForecast } from './weather.service';

@Injectable()
export class ClimateAdvisoryService {
  constructor(private readonly weatherService: WeatherService) {}

  async evaluateAdvisory(city: string): Promise<{
    hasAlert: boolean;
    alertMessage?: string;
    forecast: WeatherForecast;
  }> {
    const forecast = await this.weatherService.getForecast(city);
    let hasAlert = false;
    let alertMessage = undefined;

    if (forecast.condition === 'Thunderstorm') {
      hasAlert = true;
      alertMessage = `Severe weather warning in ${city}: Thunderstorms expected. Stay indoors during peak hours.`;
    } else if (forecast.tempC > 40) {
      hasAlert = true;
      alertMessage = `Extreme heat advisory in ${city}: Temperature exceeds 40°C. Stay hydrated.`;
    }

    return { hasAlert, alertMessage, forecast };
  }
}
