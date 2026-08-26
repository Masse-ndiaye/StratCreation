import React, { useState } from 'react'
import { portfolioItems, portfolioOptions, type portfolio } from '../constant'
import { Flame } from 'lucide-react';
import TitleSection from '../Components/TitleSection';

export default function Portfolio() {

  const [card,setCart] = useState<portfolio[]>(portfolioItems)
   const handleClick  = (event:React.MouseEvent<HTMLButtonElement>)=>{
    const valeur = event.currentTarget.value;
    if(valeur === 'All'){
      setCart(portfolioItems)
    }else{
      const filter = portfolioItems.filter((item)=>item.categorie === valeur);
      setCart(filter)
    }
   }



  return (
    <section className='bg-gray-100 p-10'>
         <TitleSection title="Our Portfolio" color="text-slate-900 mb-5" />
      <div className='flex justify-center items-center gap-6 text-2xl font-bold'>
        {portfolioOptions.map((item,index)=>(
          <div key={index} >
            <button value={item} onClick={handleClick}>
              {item}
            </button>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 p-10'>
        {card.map((item,index)=>(
          <div key={index} className='relative'>
            <img src={item.img} alt="images" />
            <div className='absolute top-0 w-full bg-blue-600/70 h-full flex flex-col
            gap-2 justify-center items-center text-white opacity-0 hover:opacity-600 duration-150
             ease-in transition-opacity cursor-pointer'>
                 <Flame />
              <p>{item.nom}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
