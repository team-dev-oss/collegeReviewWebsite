<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx"
=======
import { clsx, type ClassValue } from "clsx"
>>>>>>> campus-guru/main
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
