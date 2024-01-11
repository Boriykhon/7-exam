import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='bg-[gray] w-[1440px] h-[50px] px-[80px]'>
        <ul className="flex justify-end">
        <li><Link href="/">Home</Link></li>
        <li><Link className='ml-[40px]' href="/auth">Auth</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
