import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'

export default function Nav() {
  const [navbar, setNavbar] = useState(false)
 return (
   <nav className='fixed top-0 flex items-center justify-between w-full py-5 overflow-hidden bg-white px-14 shadow-[0_10px_100px_rgb(0_0_0_/_10%)] z-[1000] md:overflow-visible'>
     <div className='md:flex md:items-center'>
       <div className='flex items-center justify-center cursor-pointer'>
         <Image
           priority
           src='/images/profile.jpg'
           className='mr-3 rounded-full md:h-24 md:w-24 md:mr-6'
           height={47}
           width={47}
           alt='profile-pic'
         />
         <span className='font-bold transition duration-300 ease-linear text-[17px] md:text-[32px]  hover:text-rose-400'>
           AZEEZAT OLAITAN
         </span>
       </div>
       <div className='hidden md:block md:relative md:left-72'>
         <button className='' onClick={() => setNavbar(!navbar)}>
           {navbar ? (
             <svg
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
               stroke-width='1.5'
               stroke='currentColor'
               class='w-14 h-14'
             >
               <path
                 stroke-linecap='round'
                 stroke-linejoin='round'
                 d='M6 18L18 6M6 6l12 12'
               />
             </svg>
           ) : (
             <svg
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
               stroke-width='1.5'
               stroke='currentColor'
               class='w-14 h-14'
             >
               <path
                 stroke-linecap='round'
                 stroke-linejoin='round'
                 d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
               />
             </svg>
           )}
         </button>
       </div>
     </div>
     <div
       className={`md:mt-[5rem] md:absolute md:top-14 md:left-0 md:bg-white md:w-full ${
         navbar ? 'block' : 'hidden'
       }`}
     >
       <ul className='flex cursor-pointer md:grid md:gap-y-8'>
         <li className='mr-14 text-[15px] font-bold uppercase tracking-wider md:block md:px-[2rem] md:py-[3rem] md:text-[1.6rem] md:text-[#333] md:text-right md:border-y md:border-solid md:border-black md:mr-0 transition duration-300 ease-linear hover:text-rose-400 '>
           <Link href='#home'>home</Link>
         </li>
         <li className='mr-14 text-[15px] font-bold uppercase tracking-wider md:block md:px-[2.5rem] md:py-[3rem] md:text-[1.6rem] md:text-[#333] md:text-right md:border-b md:border-solid md:border[#eee] transition duration-300 ease-linear hover:text-rose-400'>
           <Link href='#about'>about</Link>
         </li>
         <li className='mr-14 font-bold uppercase tracking-wider md:block md:px-[2.5rem] md:py-[3rem] md:text-[1.6rem] md:text-[#333] md:text-right md:border-b md:border-solid md:border[#eee] transition duration-300 ease-linear text-[15px] hover:text-rose-400'>
           <Link href='#project'>projects</Link>
         </li>
         <li className='mr-8 font-bold uppercase tracking-wider md:block md:px-[2.5rem] md:py-[3rem] md:text-[1.6rem] md:text-[#333] md:text-right md:border-b md:border-solid md:border[#eee] transition duration-300 ease-linear text-[15px] hover:text-rose-400'>
           <Link href='#contact'>contact</Link>
         </li>
       </ul>
     </div>
   </nav>
 );
}