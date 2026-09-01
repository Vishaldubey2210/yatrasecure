import { EmergencyContactsService } from './emergency-contacts.service';

describe('EmergencyContactsService', () => {
  let service: EmergencyContactsService;

  beforeEach(() => {
    service = new EmergencyContactsService();
  });

  it('should validate complete contacts list', () => {
    const valid = [{ name: 'Dad', phone: '+919876543210', relationship: 'Parent' }];
    expect(service.validateContacts(valid)).toBe(true);
  });

  it('should reject invalid contacts without phone', () => {
    const invalid = [{ name: 'Dad', phone: '', relationship: 'Parent' }];
    expect(service.validateContacts(invalid)).toBe(false);
  });

  it('should generate Google Maps location link in SOS SMS', () => {
    const sms = service.formatEmergencyAlertSMS('Vishal', { lat: 28.61, lng: 77.20 });
    expect(sms).toContain('https://maps.google.com/?q=28.61,77.2');
  });
});
