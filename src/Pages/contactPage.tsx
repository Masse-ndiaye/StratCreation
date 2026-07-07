import { MapPin,Phone,CircleChevronLeft, } from 'lucide-react';
import { FaFacebook,FaYoutube,FaInstagram,FaTwitter } from 'react-icons/fa'

import { contact } from '../constant';

export default function ContactPage() {
  return (
    <section className='flex gap-10 bg-slate-950 p-20'>
          <div className='ml-15'>
            <h1 className="text-white text-6xl font-bold py-5">Contact</h1>
            {contact.map((item,index)=>(
                <ul key={index} className=' flex-col text-white text-xl space-y-3 mt-3'>
                    <li className='flex gap-4 '>  <MapPin/> {item.local1}</li>
                      <li className='flex gap-4 hover:text-green-500 '>  <Phone/> {item.local2}</li>
                    <li className='flex gap-4 hover:text-green-500 '>  <Phone/> {item.local3}</li>
                    <li className='flex gap-4 '>  <CircleChevronLeft/> {item.local4}</li> 
                </ul>
            ))}
            <div className=' flex gap-6 text-xl text-white mt-4'>
                <FaFacebook className='hover:text-green-500'/>
                <FaTwitter  className='hover:text-green-500'/>
                <FaInstagram  className='hover:text-green-500'/>
                <FaYoutube  className='hover:text-green-500'/>
            </div>
            
          </div>
         <div className='flex-col space-y-10 py-25'>
           <div className='bg-white '>
            <input type="text" placeholder='Name' className='gap-6'/>
            <input type="text" placeholder='Last Name' className='ml-6' />
           </div>
           <div className='bg-white '>
            <input type="text" placeholder='phone' />
            <input type="text" placeholder='Email' />
           </div>
         </div>
    </section>
  )
}
