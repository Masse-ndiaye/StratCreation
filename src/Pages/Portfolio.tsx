import TitleSection from "../Components/TitleSection"
import {tit,galerie,parcour} from "../constant"

export default function PortfolioPage() {
  return (
   <section className="">
               <TitleSection title="Our Portfolio" color="text-slate-900 bg-gray-100  mt-10" />
    <div className="bg-gray-100 w-full p-10">
   <div className="flex flex-wrap  justify-center items-center gap-5 ">
     {tit.map((item,index)=>(
       <ul key={index}className="" >
        <li className=" font-semibold text-xl mb-6 mt-6">{item.titre}</li>
       </ul>
    ))}
   </div>
   <div className="grid grid-cols-3 gap-4 p-6 sm:grid-cols-1
    md:grid-cols-2 lg:grid-cols-3 mt-2">
    {galerie.map((item,index)=>(
        <div key={index}>
            <img src={item.photo} alt="photo" 
        />
        </div>
    ))}
   </div>
    </div>
    <div className="flex justify-center items-center space-x-10 bg-gray-50 p-26">
    {parcour.map((item,index)=>(
       <div key={index} className="bg-white shadow-2xl mt-20 p-10 rounded-lg">
            <p className="text-5xl font-bold text-green-500">{item.chiffres}<span>+</span></p>
            <h4 className="text-4xl font-bold mt-4">{item.element}</h4>
       </div>
    ))}
    </div>
   </section>
  )
}
