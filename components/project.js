import Image from 'next/image'

export default function Project() {
 return (
   <main id='project' className='flex flex-col px-16 py-28 md:px-0'>
     <div className='flex flex-col items-center justify-center md:my-8'>
       <h2 className='uppercase text-[40px] font-bold tracking-wider md:text-[70px]'>
         projects
       </h2>
       <span className='h-[5px] w-8 m-5 rounded bg-rose-400 md:w-10 md:h-[8px]'></span>
       <p className='block max-w-[700px] text-[21px] text-center break-words text-[#555] md:text-[33px] md:mx-8 md:mb-6'>
         Here you will find some of the personal and clients projects that I
         created with each project containing its own case study
       </p>
     </div>
     <div className='mt-16'>
       <div className='flex mb-[-200px] md:flex-col'>
         <div className='mr-6 md:ml-6 md:w-[800px]md:h-[400px] md:-mb-14'>
           <Image
             priority
             src='/images/laptop.png'
             className='md:h-[100%] md:w-[100%] '
             height={720}
             width={720}
             alt='project'
           />
           <Image
             priority
             src='/images/keeneye1.jpg'
             className='relative top-[-54%] left-[15.7%] rounded md:bottom-[424px] md:left-[123px] md:h-[346px] md:w-[540px]'
             height={492}
             width={492}
             alt='project'
           />
         </div>
         <div className='max-w-[450px] mt-12 md:-mt-56 md:max-w-[100%] md:flex md:flex-col md:items-center md:mx-10'>
           <h3 className='font-bold text-2xl mb-6 md:text-[50px] md:mb-10'>
             Keen Eyesight
           </h3>
           <p className='text-lg text-[#666] md:text-[32px] md:leading-[50px] md:text-center md:mb-5'>
             Keen Sight is a logistic company that provides prompt and reliable
             transportation services for people and goods.
           </p>
           <button className='px-12 py-3 mt-8 text-lg font-semibold tracking-wider transition duration-300 ease-linear rounded-md shadow-[0_5px_15px_0_rgb(0_0_0_/_15%)] bg-rose-400 hover:-translate-y-1 uppercase md:mt-3 md:mb-[350px] md:text-3xl md:px-[70px] md:py-6 md:rounded-lg'>
             case study
           </button>
         </div>
       </div>

       <div className='flex mb-[-200px] md:flex-col'>
         <div className='mr-6 md:ml-6 md:w-[800px]md:h-[400px] md:-mb-14'>
           <Image
             priority
             src='/images/laptop.png'
             className='md:h-[100%] md:w-[100%]'
             height={720}
             width={720}
             alt='project'
           />
           <Image
             priority
             src='/images/keeneye1.jpg'
             className='relative top-[-54%] left-[15.7%] rounded md:bottom-[424px] md:left-[123px] md:h-[346px] md:w-[540px]'
             height={492}
             width={492}
             alt='project'
           />
         </div>
         <div className='max-w-[450px] mt-12 md:-mt-56 md:max-w-[100%] md:flex md:flex-col md:items-center md:mx-10 '>
           <h3 className='font-bold text-2xl mb-6 md:text-[50px] md:mb-10'>
             Keen Eyesight
           </h3>
           <p className='text-lg text-[#666] md:text-[32px] md:leading-[50px] md:text-center md:mb-5'>
             Keen Sight is a logistic company that provides prompt and reliable
             transportation services for people and goods.
           </p>
           <button className='px-12 py-3 mt-8 text-lg tracking-wider font-semibold transition duration-300 ease-linear rounded-md shadow-[0_5px_15px_0_rgb(0_0_0_/_15%)] bg-rose-400 hover:-translate-y-1 uppercase md:mt-2 md:mb-[350px] md:text-3xl md:px-[70px] md:py-6 md:rounded-lg'>
             case study
           </button>
         </div>
       </div>

       <div className='flex mb-[-200px] md:flex-col'>
         <div className='mr-6 md:ml-6 md:w-[800px]md:h-[400px] md:-mb-12'>
           <Image
             priority
             src='/images/laptop.png'
             className='md:h-[100%] md:w-[100%]'
             height={720}
             width={720}
             alt='project'
           />
           <Image
             priority
             src='/images/keeneye1.jpg'
             className='relative top-[-54%] left-[15.7%] rounded md:bottom-[424px] md:left-[123px] md:h-[346px] md:w-[540px]'
             height={492}
             width={492}
             alt='project'
           />
         </div>
         <div className='max-w-[450px] mt-14 md:-mt-56 md:max-w-[100%] md:flex md:flex-col md:items-center md:mx-10 '>
           <h3 className='font-bold text-2xl mb-6 md:text-[45px] md:mb-10'>
             Keen Eyesight
           </h3>
           <p className='text-lg text-[#666] md:text-[32px] md:leading-[50px] md:text-center md:mb-5'>
             Keen Sight is a logistic company that provides prompt and reliable
             transportation services for people and goods.
           </p>
           <button className='px-12 py-3 mt-8 text-lg tracking-wider font-semibold transition duration-300 ease-linear rounded-md shadow-[0_5px_15px_0_rgb(0_0_0_/_15%)] bg-rose-400 hover:-translate-y-1 uppercase md:mt-3 md:mb-[350px] md:text-3xl md:px-[70px] md:py-6 md:rounded-lg'>
             case study
           </button>
         </div>
       </div>

       <div className='flex mb-[-200px] md:flex-col'>
         <div className='mr-6 md:ml-6 md:w-[800px]md:h-[400px] md:-mb-14'>
           <Image
             priority
             src='/images/laptop.png'
             className='md:h-[100%] md:w-[100%]'
             height={720}
             width={720}
             alt='project'
           />
           <Image
             priority
             src='/images/keeneye1.jpg'
             className='relative top-[-54%] left-[15.7%] rounded md:bottom-[424px] md:left-[123px] md:h-[346px] md:w-[540px]'
             height={492}
             width={492}
             alt='project'
           />
         </div>
         <div className='max-w-[450px] mt-12 md:-mt-56 md:max-w-[100%] md:flex md:flex-col md:items-center md:mx-10 '>
           <h3 className='font-bold text-2xl mb-6 md:text-[45px] md:mb-10'>
             Keen Eyesight
           </h3>
           <p className='text-lg text-[#666] md:text-[32px] md:leading-[50px] md:text-center md:mb-5'>
             Keen Sight is a logistic company that provides prompt and reliable
             transportation services for people and goods.
           </p>
           <button className='px-12 py-3 mt-8 text-lg tracking-wider font-semibold transition duration-300 ease-linear rounded-md shadow-[0_5px_15px_0_rgb(0_0_0_/_15%)] bg-rose-400 hover:-translate-y-1 uppercase md:mt-3 md:mb-[350px] md:text-3xl md:px-[70px] md:py-6 md:rounded-lg'>
             case study
           </button>
         </div>
       </div>

       <div className='flex mb-[-350px] md:flex-col'>
         <div className='mr-6 md:ml-6 md:w-[800px]md:h-[400px] md:-mb-14'>
           <Image
             priority
             src='/images/laptop.png'
             className='md:h-[100%] md:w-[100%]'
             height={720}
             width={720}
             alt='project'
           />
           <Image
             priority
             src='/images/keeneye1.jpg'
             className='relative top-[-54%] left-[15.7%] rounded md:bottom-[424px] md:left-[123px] md:h-[346px] md:w-[540px]'
             height={492}
             width={492}
             alt='project'
           />
         </div>
         <div className='max-w-[450px] mt-12 md:-mt-56 md:max-w-[100%] md:flex md:flex-col md:items-center md:mx-10 '>
           <h3 className='font-bold text-2xl mb-6 md:text-[45px] md:mb-10'>
             Keen Eyesight
           </h3>
           <p className='text-lg text-[#666] md:text-[32px] md:leading-[50px] md:text-center md:mb-5'>
             Keen Sight is a logistic company that provides prompt and reliable
             transportation services for people and goods.
           </p>
           <button className='px-12 py-3 mt-8 text-lg tracking-wider font-semibold transition duration-300 ease-linear rounded-md shadow-[0_5px_15px_0_rgb(0_0_0_/_15%)] bg-rose-400 hover:-translate-y-1 uppercase md:mt-3 md:mb-[430px] md:text-3xl md:px-[70px] md:py-6 md:rounded-lg'>
             case study
           </button>
         </div>
       </div>
     </div>
   </main>
 );
}