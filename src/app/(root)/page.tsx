import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName:'Atharva', lastName:'Sakpal', email: 'atharvasakpal@protonmail.com'}
  return (
    <section className='no-scrollbar flex flex-row w-full max-xl:max-h-screen max-xl:overflow-y-scroll'>
        <div className='no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-scroll'>
            <div className='flex flex-col justify-between gap-8'>
                <HeaderBox
                type='greeting'
                title='Welcome'
                user={loggedIn?.firstName || 'Guest'}
                subtext='Access and manage your account and transactiions efficiently'
                />

                <TotalBalanceBox
                accounts= {[]}
                totalBanks = {1}
                totalCurrentBalance = {1250.35}
                />

                RECENT TRANSACTIONS
            </div>
            
        </div>
        <RightSidebar 
        user ={loggedIn}
        transactions ={[]}
        banks ={[{},{}]}
        />
    </section>
  )
}

export default Home
