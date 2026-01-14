import React from 'react'
import LogoCloud from './logo-cloud'

function BrandSection() {
    return (
        <section>
            <div className='flex items-center justify-between padding-x bg-white'>
                <h1 className='text-[#171717] text-[38px] font-medium min-w-max '>
                    Our Brand Partners
                </h1>
                <div className='w-[931px] h-0.5 bg-gradient-to-r from-[#76B828] to-[#C7D300]' />
            </div>
            {/* logos */}
            <LogoCloud/>
        </section>
    )
}

export default BrandSection

