import { MilestonesService } from './milestones.service';

describe('MilestonesService', () => {
  let service: MilestonesService;

  beforeEach(() => {
    service = new MilestonesService();
  });

  it('should assign Pathfinder level at 3 trips', () => {
    const level = service.getUserLevel(3);
    expect(level.title).toBe('Pathfinder');
  });

  it('should assign Expedition Master at 10+ trips', () => {
    const level = service.getUserLevel(12);
    expect(level.title).toBe('Expedition Master');
  });
});
