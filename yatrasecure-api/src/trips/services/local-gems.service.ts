import { Injectable } from '@nestjs/common';

export interface LocalGem {
  name: string;
  city: string;
  category: 'food' | 'viewpoint' | 'heritage' | 'nature';
  description: string;
  bestTimeToVisit: string;
}

@Injectable()
export class LocalGemsService {
  private readonly gems: LocalGem[] = [
    {
      name: 'Jogini Waterfall Secret Trail',
      city: 'Manali',
      category: 'nature',
      description: 'A secluded trek starting from Vashisht village through pine woods.',
      bestTimeToVisit: 'Early morning (07:00 AM)',
    },
    {
      name: 'Fontainhas Heritage Walk',
      city: 'Goa',
      category: 'heritage',
      description: 'Latin Quarter showcasing vibrant Portuguese architectural houses and local bakeries.',
      bestTimeToVisit: 'Late afternoon (04:00 PM)',
    },
    {
      name: 'Tso Moriri High Altitude Lake',
      city: 'Leh',
      category: 'nature',
      description: 'Pristine, less crowded blue water lake home to rare bird species.',
      bestTimeToVisit: 'May to September',
    },
  ];

  getGemsByCity(city: string): LocalGem[] {
    return this.gems.filter((g) => g.city.toLowerCase() === city.toLowerCase());
  }
}
