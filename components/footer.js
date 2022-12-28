import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

export default function Footer() {
 return (
   <footer className='flex flex-col bg-black text-white p-10 md:py-14 md:px-10'>
     <div className='p-10 flex justify-between md:flex-col md:pt-40 md:px-0 md:mb-40'>
       <div className='md:absolute md:mt-24'>
         <h3 className='uppercase font-bold text-[22px] tracking-widest mb-5 md:text-8 md:text-[40px] md:font-semibold md:mb-6'>
           azeezat olaitan
         </h3>
         <p className='text-base text-gray-300 max-w-[400px] md:min-w-[700px] md:text-3xl md:pr-10 md:leading-10'>
           A highly motivated Frontend Web Developer that loves building
           Websites and Web Applications with great user experiences
         </p>
       </div>
       <div className='md:relative md:-top-32'>
         <h3 className='uppercase font-bold text-[22px] tracking-widest mb-5 md:text-[40px] md:mb-6 md:font-semibold'>
           social
         </h3>
         <div className='cursor-pointer ml-[-5px] mt-[-2px]'>
           <FontAwesomeIcon
             icon={faLinkedin}
             size='2xl'
             className='p-2 rounded-md md:mr-4'
           />
           <FontAwesomeIcon
             icon={faTwitter}
             size='2xl'
             className='p-2 rounded-md md:mr-4'
           />
           <FontAwesomeIcon
             icon={faInstagram}
             size='2xl'
             className='p-2 rounded-md md:mr-4'
           />
           <FontAwesomeIcon
             icon={faGithub}
             size='2xl'
             className='p-2 rounded-md md:mr-4'
           />
           <FontAwesomeIcon
             icon={faSquareFacebook}
             size='2xl'
             className='p-2 rounded-md md:mr-4'
           />
         </div>
       </div>
     </div>
     <span className='mx-10 my-8 border-t border-solid border-[#444] shadow-[0_-1px_#000000b3] md:mx-0 md:mt-20 md:mb-10'></span>
     <div className='px-10 flex justify-between md:p-0 md:mt-4 md:items-center'>
       <small className='text-gray-300 md:text-[24px]'>
         © Copyright {new Date().getFullYear()}. Made by
         <b className='underline tracking-wider'>Azeezat Olaitan</b>
       </small>
       <p className='uppercase text-gray-300 text-[18px] md:tracking-wider font-bold md:text-[30px]'>
         <Link href='#home'>home</Link>
       </p>
     </div>
   </footer>
 );
}