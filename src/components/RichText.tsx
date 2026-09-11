/** Renders *emphasis* markers (cited words in stems and explanations) as italics. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/);
  return <>{parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part))}</>;
}
