import { useState } from 'react'

export default function Contact() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
   })

   function handleChange(event){
     const {name, value, type} = event.target
     setFormData(prevData => {
      return {
        ...prevData, [name]: value
      }
     })
   }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

 const styles = {
  color: '#333',
  padding: '18px',
  width: '100%',
  border: '1px solid #ebebeb',
  fontSize: '15px',
  background: '#f0f0f0',
  fontWeight: '600',
  borderRadius: '6px',
  outline: 'none',
  marginTop: '7px'
   }

 return (
   <main
     id='contact'
     className="pt-28 pb-10 bg-[url('/images/background1.jpg')] bg-no-repeat bg-cover bg-top flex justify-center brightness-100 items-center"
   >
     <div className='min-w-[800px]'>
       <div className='flex flex-col items-center justify-center md:my-10'>
         <h2 className='uppercase text-[40px] font-bold tracking-wider md:text-[70px] '>
           contact
         </h2>
         <span className='h-[5px] w-8 m-5 rounded bg-rose-400 md:w-10 md:h-[8px]'></span>
         <p className='block max-w-[800px] text-[21px] text-center break-words text-[#555] md:text-[33px] md:mx-8 md:mb-10'>
           Feel free to Contact me by submitting the form below and I will get
           back to you as soon as possible
         </p>
       </div>

       <form
         onSubmit={handleSubmit}
         className='max-w-[800px] my-20 bg-white p-10 rounded shadow-[rgb(100_100_111_/_20%)_0_7px_29px_0] md:mx-14 md:rounded-xl md:p-14'
       >
         <h3 className='font-bold text-[14px] text-[#666] md:text-[25px] '>
           Name
         </h3>
         <input
           type='text'
           placeholder='Enter Your Name'
           name='name'
           value={formData.name}
           onChange={handleChange}
           className='p-[18px] w-[100%] border border-solid border-[#ebebeb] text-[15px] text-[#333] bg-[#f0f0f0] font-semibold rounded-md outline-none mt-[7px] md:p-8 md:rounded-xl md:text-[30px] md:mt-[15px]'
         />
         <h3 className='mt-10 text-[14px] font-bold text-[#666] md:text-[25px]'>
           Email
         </h3>
         <input
           type='email'
           placeholder='Enter Your Email'
           name='email'
           value={formData.email}
           onChange={handleChange}
           className='p-[18px] w-[100%] border border-solid border-[#ebebeb] text-[15px] text-[#333] bg-[#f0f0f0] font-semibold rounded-md outline-none mt-[7px] md:p-8 md:rounded-xl md:text-[30px] md:mt-[15px]'
         />
         <h3 className='mt-10 font-bold text-[14px] text-[#666] md:text-[25px]'>
           Message
         </h3>
         <textarea
           placeholder='Enter Your Message'
           name='message'
           value={formData.message}
           onChange={handleChange}
           className='pt-5 pl-5 pb-40 w-[100%] border border-solid border-[#ebebeb] text-[15px] text-[#333] bg-[#f0f0f0] font-semibold rounded-md outline-none mt-[7px] md:pl-8 md:pt-8 md:pb-72 md:rounded-xl md:text-[30px] md:mt-[15px]'
         />
         <button className='uppercase px-[74px] py-4 mt-10 tracking-wider text-lg font-semibold ml-[71%] self-end transition duration-300 ease-linear rounded-md shadow-[0_5px_15px_0_rgb(0_0_0_/_15%)] bg-rose-400 hover:-translate-y-1 md:ml-0 md:px-64 md:py-10 md:text-3xl md:rounded-xl'>
           Submit
         </button>
       </form>
     </div>
   </main>
 );
}