import { Injectable } from '@nestjs/common';

export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
  isPrimary?: boolean;
}

@Injectable()
export class EmergencyContactsService {
  validateContacts(contacts: EmergencyContact[]): boolean {
    if (!Array.isArray(contacts)) return false;
    return contacts.every((c) => c.name && c.phone && c.phone.length >= 10);
  }

  formatEmergencyAlertSMS(userName: string, location: { lat: number; lng: number }, msg?: string): string {
    const mapsLink = `https://maps.google.com/?q=${location.lat},${location.lng}`;
    return `EMERGENCY ALERT: ${userName} has triggered an SOS beacon on YatraSecure. Location: ${mapsLink}. Message: ${msg || 'Immediate assistance requested.'}`;
  }
}
