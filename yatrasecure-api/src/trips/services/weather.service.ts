import { Injectable } from '@nestjs/common';

export interface WeatherForecast {
  city: string;
  tempC: number;
  condition: 'Sunny' | 'Partly Cloudy' | 'Rainy' | 'Snow' | 'Thunderstorm';
  humidity: number;
  windSpeedKmh: number;
  uvIndex: number;
  recommendation: string;
}

@Injectable()
export class WeatherService {
  async getForecast(city: string): Promise<WeatherForecast> {
    const hash = city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const tempC = 15 + (hash % 18);
    const conditions: WeatherForecast['condition'][] = [
      'Sunny',
      'Partly Cloudy',
      'Rainy',
      'Snow',
      'Thunderstorm',
    ];
    const condition = conditions[hash % conditions.length];

    let recommendation = 'Great weather for outdoor exploration!';
    if (condition === 'Rainy' || condition === 'Thunderstorm') {
      recommendation = 'Carry waterproof jackets and avoid high-altitude trails.';
    } else if (condition === 'Snow') {
      recommendation = 'Layer thermals and wear snow-grip boots.';
    }

    return {
      city,
      tempC,
      condition,
      humidity: 45 + (hash % 40),
      windSpeedKmh: 8 + (hash % 20),
      uvIndex: 3 + (hash % 7),
      recommendation,
    };
  }
}
