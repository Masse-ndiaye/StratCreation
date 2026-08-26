import TitleSection from '../Components/TitleSection'
import {features} from '../constant'
import { Link } from 'react-router-dom'

    export default function ServicePage() {
   return (
    <section className='bg-slate-50 mt-10'>
        <TitleSection title="Our Services" color="text-gray-900 py-10 " />
       <div className='grid grid-cols-3   space-y-0 py-10 ' >
          {features.map((service)=>(
             <Link 
             to={`/service/${service.id}`}
             key={service.id} className='hover:bg-white rounded-2xl p-10 hover:shadow-2xl '>
                 <img src={service.imgA} alt="Image" />
                 <h3 className='text-2xl font-extrabold mt-4 mb-4 
                 '>{service.titre}</h3>
                 <p>{service.prgrphe}</p>
                 <p>{service.prgrphe1}</p>
             </Link>
         ))}
       </div>
     </section>
   )
 }
