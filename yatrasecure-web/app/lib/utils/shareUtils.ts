import toast from 'react-hot-toast';

export async function shareTrip(title: string, text: string, url: string) {
  if (typeof window !== 'undefined' && navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return true;
    } catch (e) {
      // fallback
    }
  }

  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(url);
    toast.success('Trip link copied to clipboard!');
    return true;
  } catch (e) {
    toast.error('Unable to share link');
    return false;
  }
}

export function getWhatsAppShareLink(text: string, url: string): string {
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} - ${url}`)}`;
}
