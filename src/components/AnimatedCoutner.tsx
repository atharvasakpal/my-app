'use client'

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCoutner = ({amount} : {amount:number}) => {
  return (
    <div className='w-full'>
      <CountUp end={amount} duration={1.5} decimal='.'prefix='₹' decimals={2}/>
    </div>
  )
}

export default AnimatedCoutner
