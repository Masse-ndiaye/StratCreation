import  { useState } from 'react'
import TitleSection from '../Components/TitleSection'
import { testimonial } from '../constant'

export default function Testimonials() {
    const [test,setTest] = useState(testimonial)
    const  teste = ()=>{
        const filtered = [...test]
        const lem1 = filtered.filter(nom => nom.nom !== "Richard Nautz")
        setTest(lem1)
    }
    const  teste2 = ()=>{
        const filtered =  [...test]
        const lem2 = filtered.filter(nom => nom.nom !== "Olivia Grosh")
        setTest(lem2)
    }
  return (
    <section>
      <TitleSection title={'Testimonials'} color={'text-slate-900'}/>
      <div>
      <div className='flex gap-7 scrollbar-none overflow-x-auto'>
    {test.map((item,index)=>(
        <div key={index} className='w-1/2'>
            <p>{item.description}</p>
            
            <div>
                <img src={item.imp} alt="imp" />
                <div>
                    <p>{item.nom}</p>
                    <p>{item.poste}</p>
                </div>
            </div>
        </div>

    ))}
    </div>
    <div className=' flex justify-center gap-3'>
        <button className='size-3 bg-gray-600 rounded-full' onClick={teste}></button>
        <button className='size-3 bg-gray-600 rounded-full' onClick={teste2}></button>
    </div>
      
      </div>
    </section>
  )
}
