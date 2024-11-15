import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAccount(amount:number):string {
  const formatter = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency: 'INR',
    minimumFractionDigits:2,
  })
  return formatter.format(amount);
}