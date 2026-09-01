export interface EmergencyService {
  name: string;
  number: string;
  desc: string;
  category: 'police' | 'medical' | 'women' | 'disaster';
}

export const INDIA_EMERGENCY_SERVICES: EmergencyService[] = [
  { name: 'National Emergency Helpline', number: '112', desc: 'All-in-one emergency response service', category: 'police' },
  { name: 'Police Control Room', number: '100', desc: 'Immediate police intervention', category: 'police' },
  { name: 'Ambulance / Medical Emergency', number: '102', desc: 'Ambulance and medical transport', category: 'medical' },
  { name: 'Women Helpline', number: '1091', desc: '24/7 Women in distress helpline', category: 'women' },
  { name: 'Disaster Management Services', number: '1078', desc: 'National disaster response authority', category: 'disaster' },
  { name: 'Tourist Helpline (Incredible India)', number: '1363', desc: 'Toll-free multi-language tourist guide', category: 'police' },
];
