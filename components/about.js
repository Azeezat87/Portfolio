import Link from 'next/link'


export default function About() {
 return (
   <main id='about' className='py-28 px-20 flex flex-col bg-gray-50 md:px-10'>
     <div className='flex flex-col items-center justify-center md:my-8'>
       <h2 className='uppercase text-[40px] font-bold tracking-wider md:text-[70px]'>
         about me
       </h2>
       <span className='h-[5px] w-8 m-5 rounded bg-rose-400 md:w-10 md:h-[8px]'></span>
       <p className='block max-w-[700px] text-[21px] text-center break-words text-[#555] md:text-[33px] md:max-w-[100%]  md:mb-6'>
         Here you will find more information about me, what I do, and my current
         skills regarding programming and technology
       </p>
     </div>
     <div className='flex flex-row justify-between mt-20 md:flex-col'>
       <article>
         <h3 className='mb-10 text-3xl font-bold md:text-[44px]'>
           Get to know me!
         </h3>
         <p className='max-w-[550px] text-[18px] text-[#666] font-semibold md:max-w-[100%] md:text-[33px] md:font-normal'>
           I&apos;m a highly motivated <b>Frontend Web Developer</b> that loves
           building Websites and Web Applications with great user experiences.
           Check out some of my work in the <b>Projects</b> section.
           <br />
           <br />
           I&apos;m open to <b>Job</b> opportunities where I can contribute,
           learn and grow. If you have a good opportunity that matches my skills
           and experience then don&apos;t hesitate to <b>contact me</b>.
         </p>
         <Link href='#contact'>
           <button className='px-12 py-3 mt-10 text-lg font-semibold tracking-wider transition duration-300 ease-linear rounded-md shadow-[0_5px_15px_0_rgb(0_0_0_/_15%)] bg-rose-400 hover:-translate-y-1 md:mt-16 md:px-20 md:py-8 md:text-3xl md:rounded-xl md:mb-36'>
             CONTACT
           </button>
         </Link>
       </article>
       <article>
         <h3 className='mb-10 text-3xl font-bold md:text-[44px] md:mb-16'>
           My Skills
         </h3>
         <div className='mt-6 max-w-[500px] flex flex-wrap md:max-w-[100%] md:mb-10'>
           {[
             'HTML',
             'CSS',
             'JavaScript',
             'React',
             'Tailwind CSS',
             'Github',
             'Responsive Design',
           ].map((item) => (
             <span
               key={item}
               className='mr-[1rem] mb-[1rem] px-4 py-3 text-[1rem] font-semibold bg-[rgba(153,153,153,.2)] rounded-md text-[#666] md:py-[1.5rem] md:px-[2.5rem] md:text-[2rem] md:rounded-xl md:mr-[1.5rem] md:mb-[1.5rem]'
             >
               {item}
             </span>
           ))}
         </div>
       </article>
     </div>
   </main>
 );
}
