import photopricing from '../Components/assets/bg-pricing.png'
import TitleSection from '../Components/TitleSection'
import { pricing } from '../constant'
import { Check } from 'lucide-react';

// import { pricing } from '../constant'


type Props = {
  color:string
 }

export default function PricePage({color
 }:Props) {
  return (
    <section
     className="  h-screen bg-no-repeat bg-fixed bg-cover bg-blend-multiply bg-green-500 opacity-80 mb-6" 
     style={{backgroundImage:`url(${photopricing})`}}>
              <TitleSection title="Pricing Plan" color="text-white py-10" />
      <main className='mr-6 ml-10 '>
      <div className={`${color} flex gap-6 mt-6`}>
       {pricing.map((item,index)=>(
        item.titre === "Standart Package"
        ?<div key={index} className='flex-col bg-blue-600 space-y-3 p-6'>
          <p className='text-4xl text-green-500 font-bold text-center'>{item.titre} </p>
          <p className='text-center text-6xl font-bold text-white'>{item.price}</p>
        <div className='text-white space-y-3'>
          <p className='text-center'>{item.test}</p>
          <p  className='flex '> <Check className='text-green-500' />{item.lorem1}</p>
          <p className='flex '> <Check className='text-green-500' />{item.lorem2}</p>
          <p className='flex '> <Check className='text-green-500' />{item.lorem3}</p>
          <p className='flex '> <Check className='text-green-500' />{item.lorem4}</p>
          <p className='flex '> <Check className='text-green-500' />{item.lorem5}</p>
          </div>
        </div> :
        <div key={index} className='flex-col bg-white p-6 space-y-6'>
          <p className='text-4xl text-blue-500 font-bold text-center'>{item.titre} </p>
          <p className='text-center text-6xl font-bold'>{item.price}</p>
          <div className='text-gray-600 space-y-3'>
            <p className='text-center'>{item.test}</p>
            <p className='flex '> <Check className='text-green-500' />{item.lorem1}</p>
          <p className='flex '> <Check className='text-green-500' />{item.lorem2}</p>
          <p className='flex '> <Check className='text-green-500' />{item.lorem3}</p>
          <p className='flex '> <Check className='text-green-500' />{item.lorem4}</p>
          <p className='flex '> <Check className='text-green-500' />{item.lorem5}</p>
          </div>
        </div>
       ))}
      
      </div>
      </main>
    </section>
  )
}
