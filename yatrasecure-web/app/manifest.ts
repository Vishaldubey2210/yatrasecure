import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YatraSecure - Smart & Safe Collaborative Travel',
    short_name: 'YatraSecure',
    description: 'Collaborative group travel, safety distress beacon, and splitwise expenses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#0f766e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
