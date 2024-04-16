import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import truncateHtml from "truncate-html";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (text: string, wordCount = 22) =>
  truncateHtml(text, wordCount, {
    byWords: true,
  });