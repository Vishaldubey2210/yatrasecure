import { SmartItineraryService } from './smart-itinerary.service';

describe('SmartItineraryService', () => {
  let service: SmartItineraryService;

  beforeEach(() => {
    service = new SmartItineraryService();
  });

  it('should generate day schedules matching requested duration', () => {
    const days = service.generateTemplateItinerary('Leh Ladakh', 3);
    expect(days).toHaveLength(3);
    expect(days[0].activities.length).toBeGreaterThan(0);
    expect(days[0].dayNumber).toBe(1);
  });
});
