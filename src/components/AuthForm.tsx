'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'



//shadcn imports
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { AuthFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
 



 



const AuthForm = ({type}:{type:string}) => {


    const [user, setUser] = useState(null)
    const router = useRouter();

    const formSchema = AuthFormSchema(type);

    const [isLoading, setisLoading] = useState(false);
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ''
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async(data: z.infer<typeof formSchema>) =>{
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true)
    
    try{

        //sign up with Appwrite & create a plaid link token 
        if(type==='sign-up')
        {
            // const newUser  = await signUp(data);
            // setUser(newUser)
        }

        if(type==='sign-in')
        {
            // const response = await signIn({email: data.email, password: data.password})
            // if(response){router.push('/')}
        }

    }
    catch(error){console.log(error)}
    finally{
        setisLoading(false);
    }
  }


  return (
    <section className='flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8'>
        <header className='flex flex-col gap-5 md:gap-8'>
             <Link href='/' className=' flex mb-12 cursor-pointer items-center gap-2'>
                <Image src='/icons/logo.svg' width={50} height={50} alt='AppLogo' className='size-[100px] max-xl:size-15'/>
                <h1 className='2xl:text-[26px] font-ibm-plex-serif text-[26px] font-bold text-black max-xl:hidden'>bluesign</h1>
            </Link>
            <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-[24px] leading-[30px] lg:text-36 font-semibold text-gray-900'>
                        {user
                        ? 'Link Account':
                        type ==='sign-in'? 'Sign In' : 'Sign Up'
                        }
                    </h1>

                    <p className='text-[16px] leading-[24px] font-normal text-gray-600'>
                        {user
                        ?   'Link your account to get started' 
                        :   'Please enter your details'

                        }
                    </p>
            </div>
        </header>
        {user
        ?   (
                <div className='flex flex-col gap-4'>
                    {/* PlaidLink */}
                </div>
            )
        :   (
                <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        {type==='sign-up' && (
                            <>

                            <div className='flex gap-4'>

                                {/* firstname */}
                                <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <div className='flex flex-col gap-1.5'>
                                        <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                            First Name
                                        </FormLabel>
                                        <div className='flex w-full flex-col'>
                                            <FormControl>
                                                <Input placeholder='Atharva' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                            </FormControl>
                                            <FormMessage className='text-12 text-red-500 mt-2'/>
                                        </div>
                                    </div>
                                    )}
                                />

                                {/* lastname */}
                                <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <div className='flex flex-col gap-1.5'>
                                        <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                            Last Name
                                        </FormLabel>
                                        <div className='flex w-full flex-col'>
                                            <FormControl>
                                                <Input placeholder='Sakpal' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                            </FormControl>
                                            <FormMessage className='text-12 text-red-500 mt-2'/>
                                        </div>
                                    </div>
                                    )}
                                />

                            </div>

                        
                            {/* address */}
                            <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <div className='flex flex-col gap-1.5'>
                                    <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                        Address
                                    </FormLabel>
                                    <div className='flex w-full flex-col'>
                                        <FormControl>
                                            <Input placeholder='Enter your specific address' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                        </FormControl>
                                        <FormMessage className='text-12 text-red-500 mt-2'/>
                                    </div>
                                </div>
                                )}
                            />
                            <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <div className='flex flex-col gap-1.5'>
                                    <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                        City
                                    </FormLabel>
                                    <div className='flex w-full flex-col'>
                                        <FormControl>
                                            <Input placeholder='Enter your City' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                        </FormControl>
                                        <FormMessage className='text-12 text-red-500 mt-2'/>
                                    </div>
                                </div>
                                )}
                            />


                            <div className='flex gap-4'>

                                <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <div className='flex flex-col gap-1.5'>
                                        <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                            State
                                        </FormLabel>
                                        <div className='flex w-full flex-col'>
                                            <FormControl>
                                                <Input placeholder='ex: Maharashtra' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                            </FormControl>
                                            <FormMessage className='text-12 text-red-500 mt-2'/>
                                        </div>
                                    </div>
                                    )}
                                />

                                <FormField
                                control={form.control}
                                name="postalcode"
                                render={({ field }) => (
                                    <div className='flex flex-col gap-1.5'>
                                        <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                            Postal Code
                                        </FormLabel>
                                        <div className='flex w-full flex-col'>
                                            <FormControl>
                                                <Input placeholder='123456' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                            </FormControl>
                                            <FormMessage className='text-12 text-red-500 mt-2'/>
                                        </div>
                                    </div>
                                    )}
                                />

                            </div>

            
                            <div className='flex gap-4'>

                                <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <div className='flex flex-col gap-1.5'>
                                        <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                            DOB
                                        </FormLabel>
                                        <div className='flex w-full flex-col'>
                                            <FormControl>
                                                <Input placeholder='Enter your DOB' type= 'date' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                            </FormControl>
                                            <FormMessage className='text-12 text-red-500 mt-2'/>
                                        </div>
                                    </div>
                                )}
                                />

                                <FormField
                                control={form.control}
                                name="ssn"
                                render={({ field }) => (
                                    <div className='flex flex-col gap-1.5'>
                                        <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                            SSN
                                        </FormLabel>
                                        <div className='flex w-full flex-col'>
                                            <FormControl>
                                                <Input placeholder='ex:1234' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                            </FormControl>
                                            <FormMessage className='text-12 text-red-500 mt-2'/>
                                        </div>
                                    </div>
                                    )}
                                />

                            </div>


                            </>
                        )}


                        {/* sign in */}

                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <div className='flex flex-col gap-1.5'>
                                <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                    Email
                                </FormLabel>
                                <div className='flex w-full flex-col'>
                                    <FormControl>
                                        <Input placeholder='Enter your email' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                    </FormControl>
                                    <FormMessage className='text-12 text-red-500 mt-2'/>
                                </div>
                            </div>
                        )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <div className='flex flex-col gap-1.5'>
                                    <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
                                        Password
                                    </FormLabel>
                                    <div className='flex w-full flex-col'>
                                        <FormControl>
                                            <Input placeholder='Enter your password' className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500' {...field}/>
                                        </FormControl>
                                        <FormMessage className='text-12 text-red-500 mt-2'/>
                                    </div>
                                </div>
                                )}
                            />




                        <div className='flex flex-col gap-4'>
                        <Button type="submit" className='text-16 rounded-lg border border-bankGradient bg-bankGradient font-semibold text-white shadow-form hover:bg-blue-950' >

                            {isLoading? (
                                <>
                                <Loader2 size={20} className='animate-spin'/>&nbsp;
                                Loading...
                                </>
                            ):
                            (type==='sign-in')? 'Sign In' : 'Sign Up'
                        }

                        </Button>
                        </div>
                    </form>
                </Form>


                <footer className='flex justify-center gap-1'>
                    <p>{type ==='sign-in'? `Don't have an account?`: `Already have an account?`}</p>

                    <Link href={type==='sign-in'?'/sign-up':'sign-in'} className='underline text-bankGradient'>
                    {type==='sign-in'?'Sign Up':'Sign In'}
                    </Link>
                </footer>
                
                </>
            )

        }
    </section>
  )
}

export default AuthForm
