// Share utilities untuk Web Share API dengan fallback

export async function shareContent(text: string): Promise<boolean> {
  const shareData = {
    text: text,
    title: 'TEMAN MAIN'
  };
  
  // Cek apakah Web Share API tersedia
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share(shareData);
      return true;
    } catch (error) {
      // User membatalkan atau error lain
      console.log('Share cancelled or failed:', error);
      return false;
    }
  }
  
  // Fallback ke clipboard
  return copyToClipboard(text);
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined') return false;
  
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    
    // Fallback untuk browser lama
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    return successful;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
}

export function generateShareText(content: string, gameName: string): string {
  return `${content}\n\nMain bareng di TEMAN MAIN 🎮`;
}
