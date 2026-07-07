import creat from "../Components/assets/creativeAbout.png";
import { creative } from "../constant";

export default function Creative() {
  return (
    <section className=" grid grid-cols-2  gap-4 ml-20 py-20 ">
      <div className=" relative w-full sm:w-1/2 md:w-1/2  ">
        <div className="size-150 z-10">
         <img src={creat} alt="create"  />  
        </div>
        <div className="bg-green-400 text-white w-1/3 absolute 
         rounded-xl p-6 text-center top-115 -left-10">
          <p className="text-4xl font-extrabold">12</p>
          <p className="text-xl">Year <br />Expérience</p>
        </div>
      </div>

     <div className=" ">
         {creative.map((item, index) => (
        <ul key={index} className="space-y-8 ">
          <li className="text-5xl font-extrabold">{item.title}</li>
          <li className="text-slate-600 text-xl">{item.pr1}</li>
          <li className="text-slate-600 text-xl">{item.pr2}</li>
          <li className="text-slate-600 text-xl">{item.pr3}</li>
          <div className=" flex gap-6">
            <img src={item.im} alt="" className="rounded-[50%]" />
            <div className="flex-col mt-3">
              <p className="text-xl font-black">{item.nom2}</p>
              <p className="text-xl text-slate-600">{item.sstitre}</p>
            </div>
          </div>
        </ul>
      ))}
     </div>
    </section>
  );
}
