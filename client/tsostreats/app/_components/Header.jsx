import React from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between items-center p-6 md:px-20 shadow-sm'>
      <Image src='/logo.png' alt='logo'
      width={95}
      height={95}/>

      <div className='flex border p-2 rounded-lg bg-gray-200 w-96'> 
        <input type='text' className='bg-transparent w-full outline-none' />
        <Search/>
      </div>

      <div className='flex gap-5'>
        <Button variant="outline">Login</Button>
        <Button>Sign Up</Button>
      </div>

    </div>

  )
}

export default Header