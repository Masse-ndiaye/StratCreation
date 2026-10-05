import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonial, type testimoniale } from "../constant";
import {  useState } from "react";
import TitleSection from "../Components/TitleSection";


export default function Testimonials ()  {

    const [test ,setTest] = useState<testimoniale>(testimonial[0])
    const [index , setIndex]= useState(0)  ;

    const leftToright =()=>{
      setIndex(index + 1)
      console.log(index)
      if(index >= testimonial.length -1){
       setTest(testimonial[0])
       setIndex(0)
      }
      else{
        setTest(testimonial[index])
      }

    }
      const RigthToLeft =()=>{
        console.log(index)
         if(index === 0){
          setTest(testimonial[index])
          setIndex(testimonial.length - 1)
        }
      
        else{
          setTest(testimonial[index])
           setIndex(index - 1)
        }
      
    }
   
  return (
    <section className="relative  flex flex-col h-screen justify-center items-center ">
        <TitleSection title="Testimoniale" color="text-black py-10" />
      <div className="flex  bg-gray-100 p-20 rounded-2xl hover:bg-green-500 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
      <ChevronLeft onClick={leftToright} className="absolute top-[50%] left-0 size-10 font-extrabold"  />
        (
          <div key={test.id}>
            <p className="text-gray-500">{test.description}</p>
           <div className="flex space-x-4 mt-10">
             <img src={test.img} alt="" className="rounded-full" />
           <div className="flex-col mt-5">
             <p className="text-2xl font-extrabold">{test.nom}</p>
            <p className="text-gray-500">{test.poste}</p>
           </div>
           </div>
          </div>
        )
        <ChevronRight onClick={RigthToLeft} className="absolute top-[50%] right-0 size-10 font-extrabold" />
      </div>
    </section>
  )
}
