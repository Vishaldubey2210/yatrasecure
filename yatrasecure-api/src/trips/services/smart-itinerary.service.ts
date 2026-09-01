import { Injectable } from '@nestjs/common';

export interface DaySchedule {
  dayNumber: number;
  title: string;
  activities: {
    time: string;
    activity: string;
    location: string;
    estimatedCostINR: number;
  }[];
}

@Injectable()
export class SmartItineraryService {
  generateTemplateItinerary(destination: string, durationDays: number): DaySchedule[] {
    const days: DaySchedule[] = [];
    const normalizedDays = Math.min(10, Math.max(1, durationDays));

    for (let day = 1; day <= normalizedDays; day++) {
      days.push({
        dayNumber: day,
        title: `Day ${day}: Exploring ${destination}`,
        activities: [
          {
            time: '09:00 AM',
            activity: `Morning cultural visit & landmark tour in ${destination}`,
            location: `${destination} City Center`,
            estimatedCostINR: 500,
          },
          {
            time: '01:00 PM',
            activity: 'Traditional lunch at authentic local restaurant',
            location: 'Local Bazaar',
            estimatedCostINR: 400,
          },
          {
            time: '04:30 PM',
            activity: 'Sunset panoramic viewpoint and photography',
            location: `${destination} Viewpoint`,
            estimatedCostINR: 200,
          },
        ],
      });
    }

    return days;
  }
}
