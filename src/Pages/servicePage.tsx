import {features} from '../constant'
    export default function ServicePage() {
   return (
    <section className='grid grid-cols-3  space-y-10  p-15 '>
         {features.map((item,index)=>(
             <ul key={index} className='hover:bg-white rounded-2xl p-10 hover:shadow-2xl '>
                 <img src={item.imgA} alt="Image" />
                 <h3 className='text-2xl font-extrabold mt-4 mb-4 
                 '>{item.titre}</h3>
                 <p>{item.prgrphe}</p>
                 <p>{item.prgrphe1}</p>
             </ul>
         ))}
     </section>
   )
 }
