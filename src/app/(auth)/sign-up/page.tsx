import AuthForm from '@/components/AuthForm'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <section className='flex-center size-full max-sm:px-6'>
        <AuthForm type='sign-up'/>
      </section>
    </div>
  )
}

export default Signup
