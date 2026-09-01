import { EmergencyBeaconService } from './emergency-beacon.service';

describe('EmergencyBeaconService', () => {
  let service: EmergencyBeaconService;

  beforeEach(() => {
    service = new EmergencyBeaconService();
  });

  it('should broadcast distress signal and store active alert', () => {
    const payload = {
      userId: 'user-123',
      location: { lat: 28.61, lng: 77.20 },
      emergencyType: 'danger' as const,
      timestamp: new Date().toISOString(),
    };

    const res = service.broadcastDistress(payload);
    expect(res.alertId).toBeDefined();
    expect(res.status).toBe('active');
    expect(service.getActiveAlerts()).toHaveLength(1);
  });

  it('should resolve distress alert correctly', () => {
    const payload = {
      userId: 'user-456',
      location: { lat: 32.23, lng: 77.18 },
      emergencyType: 'medical' as const,
      timestamp: new Date().toISOString(),
    };
    const { alertId } = service.broadcastDistress(payload);
    expect(service.resolveDistress(alertId)).toBe(true);
    expect(service.getActiveAlerts()).toHaveLength(0);
  });
});
