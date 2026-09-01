import { CarbonFootprintService } from './carbon-footprint.service';

describe('CarbonFootprintService', () => {
  let service: CarbonFootprintService;

  beforeEach(() => {
    service = new CarbonFootprintService();
  });

  it('should calculate higher emissions for flight than train', () => {
    const flight = service.calculateEmissions(1000, 'flight', 1);
    const train = service.calculateEmissions(1000, 'train', 1);

    expect(flight.totalKgCO2).toBeGreaterThan(train.totalKgCO2);
    expect(flight.treesToOffset).toBeGreaterThan(train.treesToOffset);
  });
});
