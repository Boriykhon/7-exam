import React from 'react'

const Signup = () => {
  return (
    <div className='ml-[500px] mt-[200px] bg-[gray] w-[400px] p-[40px]'>
        <ul className='flex justify-between'>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/signup">Signup</Link></li>
        </ul>

        <h2 className='mt-[200px] ml-[150px] h-[50px]'>Signup</h2>
    </div>
  )
}

export default Signup