export interface EmergencyHelpline {
  country: string;
  police: string;
  ambulance: string;
  fire: string;
  touristHelpline?: string;
  womenHelpline?: string;
}

export const EMERGENCY_HELPLINES: Record<string, EmergencyHelpline> = {
  India: {
    country: 'India',
    police: '112',
    ambulance: '102',
    fire: '101',
    touristHelpline: '1363',
    womenHelpline: '1091',
  },
  Nepal: {
    country: 'Nepal',
    police: '100',
    ambulance: '102',
    fire: '101',
    touristHelpline: '1144',
  },
  Thailand: {
    country: 'Thailand',
    police: '191',
    ambulance: '1669',
    fire: '199',
    touristHelpline: '1155',
  },
  USA: {
    country: 'USA',
    police: '911',
    ambulance: '911',
    fire: '911',
  },
  UK: {
    country: 'United Kingdom',
    police: '999',
    ambulance: '999',
    fire: '999',
  },
};
