import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from '@/components/BankCard'

interface RightSidebarProps{
    user: User,
    transactions: Transaction[],
    banks: Account[] & Bank[]
}

const RightSidebar = ({user, transactions, banks}: RightSidebarProps) => {
  return (
    <aside className='no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll'>
        <section className='flex flex-col pb-8'>
            <div className='h-[120px] w-full bg-gradient-mesh bg-cover bg-no-repeat' />
            <div className='relative flex px-6 max-xl:justify-center'>
                <div className='flex-center absolute -top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile'>
                    <span className='text-5xl font-bold text-blue-900'>{user.name[0]}</span>
                </div>

                <div className='flex flex-col pt-24'>
                    <h1 className='text-24 font-semibold text-gray-900'>{user.name}</h1>
                    <p className='text-16 font-normal text-gray-600'>{user.email}</p>
                </div>
            </div>
        </section>

        {/* banks */}
        <section className='flex flex-col justify-between gap-8 px-6 py-8'>
            <div className='flex w-full justify-between'>
                <h2 className='text-18 font-semibold text-gray-900'> My Banks</h2>
                <Link href='/' className='flex gap-2'>
                    <Image src='/icons/plus.svg' width={20} height={20} alt='plus'/>
                    <h2 className='text-14 font-semibold text-gray-600'>Add Bank</h2>
                </Link>
            </div>

            {banks?.length>0 &&(
                <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                    <div className='relative z-10'>
                        <BankCard
                        key ={banks[0].$id}
                        account = {banks[0]}
                        username ={`${user.firstName} ${user.lastName}`}
                        showBalance ={false}
                        />
                    </div>

                    {banks[1] && (
                        <div className='absolute right-0 top-8 z-0 w-[90%]'>
                            <BankCard
                            key ={banks[1].$id}
                            account = {banks[1]}
                            username ={`${user.firstName} ${user.lastName}`}
                            showBalance ={false}
                            />
                        </div>
                    )}
                </div>
            )}
        </section>




    </aside>
  )
}

export default RightSidebar
