import { HealthService } from './health.service';

describe('HealthService', () => {
  let service: HealthService;
  let prismaMock: any;

  beforeEach(() => {
    prismaMock = {
      $queryRaw: jest.fn().mockResolvedValue([{ 1: 1 }]),
    };
    service = new HealthService(prismaMock);
  });

  it('should report healthy when DB ping succeeds', async () => {
    const status = await service.checkHealth();
    expect(status.status).toBe('healthy');
    expect(status.database).toBe('up');
  });

  it('should report degraded when DB query fails', async () => {
    prismaMock.$queryRaw.mockRejectedValue(new Error('DB Connection Refused'));
    const status = await service.checkHealth();
    expect(status.status).toBe('degraded');
    expect(status.database).toBe('unhealthy');
  });
});
