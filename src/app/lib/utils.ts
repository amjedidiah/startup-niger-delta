import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import truncateHtml from "truncate-html";
import { DEFAULT_ERROR_STATUS_CODE } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (text: string, wordCount = 22) =>
  truncateHtml(text, wordCount, {
    byWords: true,
  });

export class HttpError {
  name = "HttpError";

  process: string;
  message: string;
  status: number;
  data: any;

  constructor(process: string, message: string, status?: number, data?: any) {
    this.process = process;
    this.message = message;
    this.status = status || DEFAULT_ERROR_STATUS_CODE;
    this.data = data || null;
  }
}

export const handleResponseError = (error: any) => {
  const status =
    error instanceof HttpError ? error.status : DEFAULT_ERROR_STATUS_CODE;

  console.error(error);
  return Response.json(
    error instanceof HttpError
      ? error
      : { data: null, message: (error as Error).message },
    {
      status,
    }
  );
};