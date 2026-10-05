import {equipe } from '../constant'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaBasketballBall } from "react-icons/fa";
import TitleSection from '../Components/TitleSection';


export default function teamPage() {
  return (
    <section className='bg-gray-100 p-16 space-y-17'>
         <TitleSection title="Our Team" color="text-slate-900 mt-10" />
      <div className='flex  mb-10 gap-2 px-6'>
      {equipe.map((item,index)=>(
        <div key={index} className='relative'>
          <img src={item.imgT} alt="images"className='' />
         <div className='absolute top-0 w-full bg-blue-600/70 h-full flex flex-col
         gap-2 justify-center items-center text-white opacity-0 
         hover:opacity-600 duration-150 ease-in
         transition-opacity cursor-pointer'>
         <div className='flex-col text-center text-white text-xl space-y-2'>
           <p> {item.nom}</p>
          <p>{item.profession}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eveniet.</p>
         <div className='flex justify-center items-center gap-5'> <FaFacebookF />
          <FaXTwitter />
          <CiInstagram />
          <FaBasketballBall /></div>
         </div>
         </div>
           <p className='text-center font-bold text-2xl'>{item.nom}</p>
            <p className='text-center text-gray-600 text-2xl'>{item.profession}</p>
        </div>
        
      ))}
    </div>
    
    </section>
  )
}
