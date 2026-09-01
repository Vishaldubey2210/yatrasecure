export interface SafeZone {
  name: string;
  city: string;
  lat: number;
  lng: number;
  type: 'police_station' | 'hospital' | 'tourist_booth' | 'embassy';
  phone?: string;
}

export const POPULAR_SAFE_ZONES: SafeZone[] = [
  {
    name: 'Manali Tourist Police Booth',
    city: 'Manali',
    lat: 32.2396,
    lng: 77.1887,
    type: 'police_station',
    phone: '01902-252326',
  },
  {
    name: 'Goa Coastal Police Station',
    city: 'Goa',
    lat: 15.518,
    lng: 73.768,
    type: 'police_station',
    phone: '0832-2419400',
  },
  {
    name: 'Leh District Hospital',
    city: 'Leh',
    lat: 34.1526,
    lng: 77.5771,
    type: 'hospital',
    phone: '01982-252014',
  },
];
