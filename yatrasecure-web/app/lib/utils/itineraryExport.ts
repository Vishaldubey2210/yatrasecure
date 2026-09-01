export function generateICalFile(trip: {
  name: string;
  description?: string;
  fromCity: string;
  toCity: string;
  startDate: string;
  endDate: string;
}): string {
  const start = new Date(trip.startDate).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const end = new Date(trip.endDate).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//YatraSecure//Travel Itinerary//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${trip.name}
DESCRIPTION:${trip.description || 'YatraSecure Expedition'}
LOCATION:${trip.toCity}
DTSTART:${start}
DTEND:${end}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
}

export function downloadICal(trip: any) {
  const content = generateICalFile(trip);
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${trip.name.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
