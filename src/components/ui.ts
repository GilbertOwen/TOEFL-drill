// Shared class names, so every screen's controls look and behave the same.

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40";

export const buttonPrimary = `${base} bg-stone-900 px-5 py-2.5 text-white hover:bg-stone-700`;
export const buttonSecondary = `${base} border border-stone-300 bg-white px-4 py-2 text-stone-900 hover:bg-stone-100`;
export const buttonQuiet = `${base} px-3 py-1.5 text-stone-700 hover:bg-stone-200/70`;

export const sectionHeading = "text-sm font-semibold uppercase tracking-wide text-stone-500";

/** Question text: the serif reading face, sized for long sessions. */
export const questionText = "font-serif text-lg leading-[1.8] sm:text-xl sm:leading-[1.8]";
