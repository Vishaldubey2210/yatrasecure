import { Injectable, Logger } from '@nestjs/common';

export interface SOSPayload {
  userId: string;
  tripId?: string;
  location: {
    lat: number;
    lng: number;
    accuracy?: number;
    address?: string;
  };
  emergencyType: 'medical' | 'danger' | 'accident' | 'lost' | 'general';
  message?: string;
  timestamp: string;
}

@Injectable()
export class EmergencyBeaconService {
  private readonly logger = new Logger(EmergencyBeaconService.name);
  private activeDistressSignals: Map<string, SOSPayload> = new Map();

  broadcastDistress(payload: SOSPayload): { alertId: string; status: string; notifiedCount: number } {
    const alertId = `SOS-${Date.now()}-${payload.userId.slice(0, 4)}`;
    this.activeDistressSignals.set(alertId, payload);

    this.logger.warn(`🚨 EMERGENCY SOS TRIGGERED: User ${payload.userId} at [${payload.location.lat}, ${payload.location.lng}] Type: ${payload.emergencyType}`);

    return {
      alertId,
      status: 'active',
      notifiedCount: 5, // Mocked dispatch notifications
    };
  }

  resolveDistress(alertId: string): boolean {
    if (this.activeDistressSignals.has(alertId)) {
      this.activeDistressSignals.delete(alertId);
      this.logger.log(`✅ Emergency SOS resolved: ${alertId}`);
      return true;
    }
    return false;
  }

  getActiveAlerts(): SOSPayload[] {
    return Array.from(this.activeDistressSignals.values());
  }
}
