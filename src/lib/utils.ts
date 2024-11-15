import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

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


export const AuthFormSchema = (type:string)=> z.object({
  
  firstName:type==='sign-in'? z.string().optional(): z.string(),
  lastName:type==='sign-in'? z.string().optional(): z.string(),
  address:type==='sign-in'? z.string().optional(): z.string().min(3).max(50),
  city:type==='sign-in'? z.string().optional(): z.string().min(3).max(50),  
  state:type==='sign-in'? z.string().optional(): z.string(),
  postalcode:type==='sign-in'? z.string().optional(): z.string().max(6).min(6),
  ssn:type==='sign-in'? z.string().optional(): z.string().min(4),
  dob:type==='sign-in'? z.string().optional(): z.string(),
  email: z.string().email(),
  password: z.string().min(8),
})