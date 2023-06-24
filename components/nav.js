import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'


const ListItems = ({href, text}) => (
  <li className='mr-12 text-[15px] font-bold uppercase tracking-wider md:block md:px-[2rem] md:py-[2.8rem] md:text-[1.6rem] md:text-[#333] md:text-right md:border-y md:border-solid md:border-[#eee] md:mr-0 md:pr-20 transition duration-300 ease-linear hover:text-rose-400 '>
    <Link href={href}>{text}</Link>
  </li>
);

const menuItems = [
  { href: '#home', text: 'home' },
  { href: '#about', text: 'about' },
  { href: '#project', text: 'projects' },
  { href: '#contact', text: 'contact' },
  { href: '/blog', text: 'blog' },
];

export default function Nav() {
  const [navbar, setNavbar] = useState(false)
 return (
   <nav className='fixed top-0 flex items-center justify-between w-full py-5 overflow-hidden bg-white pl-14  shadow-[0_10px_100px_rgb(0_0_0_/_10%)] z-[1000] md:overflow-visible md:py-6'>
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
         <span className='font-bold transition duration-300 ease-linear text-[17px] md:text-[34px]  hover:text-rose-400'>
           AZEEZAT OLAITAN
         </span>
       </div>
       <div className='hidden md:block md:relative md:left-[300px]'>
         <button className='' onClick={() => setNavbar(!navbar)}>
           {navbar ? (
             <svg
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
               stroke-width='1.5'
               stroke='currentColor'
               class='w-16 h-16'
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
               class='w-16 h-16'
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
       className={`md:mt-[5rem] md:absolute md:top-14 md:left-0 md:bg-white md:w-full md:${
         navbar ? 'block' : 'hidden'
       }`}
     >
       <ul className='flex cursor-pointer md:grid md:gap-y-8'>
        {menuItems.map((menuItem, index) => (
          <ListItems 
            key={index}
            href={menuItem.href}
            text={menuItem.text}
          />
        ))}
        <li className='mr-12 text-[15px] font-bold uppercase tracking-wider md:block md:px-[2rem] md:py-[2.8rem] md:text-[1.6rem] md:text-[#333] md:text-right md:border-y md:border-solid md:border-[#eee] md:mr-0 md:pr-20 transition duration-300 ease-linear hover:text-rose-400 '>
           <a href='/files/Azeezat-Resume.pdf' download>resume</a>
        </li>
       </ul>
     </div>
   </nav>
 );
}