import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import React from 'react'

const success = () => {
  return (
    <div className="min-h-[650px] flex items-center">
        <Wrapper>
            <div className="max-w-[650px] rounded-lg p-5 border border-black mx-auto flex flex-col" >
                <div className='text-2xl font-bold'>
                   Thanks for shopping with us !
                     </div>
                    <div className="text-lg font-bold mt-2"> Thanks order has placed successfully.</div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">shoeshopcontact@gmail.com</div>

                    <Link href="/" className="font-bold mt-5">
                    Continue Sopping
                    </Link>
            </div>
            
        </Wrapper>
    </div>
  )
}

export default success