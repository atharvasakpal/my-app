import { formatAccount } from '@/lib/utils';
import React from 'react'
import AnimatedCoutner from './AnimatedCoutner';
import DoughnutChart from './DoughnutChart';



//Account
// declare type Account = {
//   id: string;
//   availableBalance: number;
//   currentBalance: number;
//   officialName: string;
//   mask: string;
//   institutionId: string;
//   name: string;
//   type: string;
//   subtype: string;
//   appwriteItemId: string;
//   shareableId: string;
// };

//declaring the interface
interface TotalBalanceBoxProps {
    accounts: Account[],
    totalBanks: number,
    totalCurrentBalance: number

}

const TotalBalanceBox = ({accounts =[], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {
  return (
    <section className='flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6'> 
        <div className='flex size-full max-w-[100px] items-center sm:max-w-[120px]'>
            <DoughnutChart accounts={accounts}/>
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='text-18 font-semibold text-gray-900'>
                Bank Accounts: {totalBanks} 
            </h2>

            <div className='flex flex-col'>
                <p className='text-14 font-medium text-gray-600'>Total Current Balance</p>
                <div className='text-24 lg:text-30 flex-1 font-semibold text-gray-900 flex-center gap-2'>
                    <AnimatedCoutner amount={totalCurrentBalance}/>
                    {/* {formatAccount(totalCurrentBalance)} */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox
