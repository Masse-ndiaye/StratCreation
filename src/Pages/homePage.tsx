import hero from "../Components/assets/bg-header.png";

export default function HomePage() {
  return (
    <>
         
    <section>
        <div className="relative h-screen bg-no-repeat bg-fixed bg-cover  bg-slate-900/50
         " style={{backgroundImage:`url(${hero})`}}>
              <div className="absolute inset-0 bg-neutral-900/80" />
         <div className=" flex-col relative  justify-center h-full 
         py-60 mt-24  text-white items-center font-extrabold text-center text-8xl">
            <span className="text-blue-500 ">Creative {""}</span>
           & Innovative <br />
          Digital Agency
          
        </div>
    
        </div>
     </section>
    
    </>
      
      )
}
