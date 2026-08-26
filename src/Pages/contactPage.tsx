import { MapPin,Phone,CircleChevronLeft, } from 'lucide-react';
import { FaFacebook,FaYoutube,FaInstagram,FaTwitter } from 'react-icons/fa'

import { contact } from '../constant';

export default function ContactPage() {
  return (
    <section className=' bg-slate-950 '>
    <div className='flex p-20'>
            <div className='px-5'>
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
        <div className=' px-10 py-20 space-y-6 space-x-6  '>
            <input type="text" placeholder='Name' className='bg-white p-4 w-80 rounded-xl'/>
            <input type="text" placeholder='Last Name' className='bg-white p-4 w-80 rounded-xl' /> <br />
          
              <input type="text" placeholder='phone'className='bg-white p-4 w-80 rounded-xl' />
            <input type="text" placeholder='Email' className=' bg-white p-4 w-80 rounded-xl' />  
           <div className='flex-col space-y-6 '>
              <input type="text" placeholder='Message'  className='bg-white p-10 w-165 rounded-lg'/>
             <button className='bg-blue-600 rounded-lg py-3 px-4 text-white'>Submit Message</button> 
           </div>
         </div>
    </div>
         <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19808.09421681701!2d-17.474210091095504!3d14.744149284100354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4
          f13.1!3m3!1m2!1s0xec10bb55f4b5493%3A0x57fe6956325e6eb!2sXarala!5e0!3m2!1sfr!2ssn!4v1783460784086!5m2!1sfr!2ssn" 
          className='w-full h-100' ></iframe>
         </div>
         <div className='text-center text-xl text-white p-6'>
            Copyright © All rights reserved.
         </div>
          </section>
          
   
  )
}
