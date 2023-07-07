import Link from 'next/link'
import { config } from '../utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';

const SocialAccounts = ({ href, icon }) => (
  <Link href={href}
        target='_blank'
        rel='noopener noreferrer'>
    <FontAwesomeIcon
           icon={icon}
           size='2x'
           className='p-2 rounded-md hover:bg-rose-100 cursor-pointer'/>
  </Link>
)

const socialMedia = [
  { href: config.linkedin_url, icon: faLinkedin },
  { href: config.twitter_url, icon: faTwitter },
  { href: config.instagram_url, icon: faInstagram },
  { href: config.gitHub_url, icon: faGithub },
  { href: config.facebook_url, icon: faSquareFacebook },
];

export default function Hero() {
 return (
   <main
     id='home'
     className="min-h-screen bg-[url('/images/background1.jpg')] bg-no-repeat bg-cover bg-top brightness-100 flex justify-center items-center md:pt-20"
   >
     <div className='bg-white min-h-[240px] min-w-[60px] mt-8 absolute left-0 flex flex-col p-2 md:hidden'>
       {socialMedia.map((item, index) => (
         <SocialAccounts
           key={index}
           href={item.href}
           icon={item.icon}
         />
       ))}
     </div>

     <div className='flex flex-col items-center mt-48 md:mt-60 '>
       <h1 className='text-[60px] font-extrabold tracking-wider text-black uppercase mb-8 md:text-[85px] md:text-center md:mb-12'>
         hey, i&apos;m azeezat oyeleke
       </h1>
       <p className='block max-w-[700px] break-words text-[21px] text-center text-[#555] mb-14 md:text-[38px] md:max-w-[92%] md:mb-20'>
         A highly motivated Frontend Web Developer that loves building Websites
         and Web Applications with great user experiences
       </p>
       <Link href='#project'>
         <button className='px-20 py-4 text-xl font-bold tracking-wider md:px-36 md:py-10 md:text-[32px] md:rounded-xl transition duration-300 ease-linear rounded-md shadow-[0_5px_15px_0_rgb(0_0_0_/_15%)] bg-rose-400 hover:-translate-y-1 '>
           PROJECTS
         </button>
       </Link>
       <div className='h-48'></div>
       <div className='flex self-center justify-center w-6 h-10 mb-5 border-2 border-gray-700 border-solid rounded-full md:border-4 md:mb-10 md:w-12 md:h-20'>
         <div className='animate-fade-out-down h-[5px] w-[5px] bg-black rounded-full md:h-[10px] md:w-[10px] md:animate-fade-in-down'></div>
       </div>
     </div>
   </main>
 );
}