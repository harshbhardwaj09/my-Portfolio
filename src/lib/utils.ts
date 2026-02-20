export function calculateReadTime(text: string) {
  const wordsPerMinute = 200;
  const textOnly = text.replace(/<[^>]*>/g, ''); // remove html tags
  const wordCount = textOnly.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
}
