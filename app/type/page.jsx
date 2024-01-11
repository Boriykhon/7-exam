import React from 'react'
import Link from 'next/link'

const Type = () => {
  return (
    <div>
        <ul className='flex gap-[40px] mt-[40px]'>
            <li><Link href="/clothes">Clothes</Link></li>
            <li><Link href="/technologies">Technologies</Link></li>
        </ul>
    </div>
  )
}

export default Type