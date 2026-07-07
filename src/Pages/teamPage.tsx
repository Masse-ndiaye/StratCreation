import { team } from "../constant"


export default function TeamPage() {
  return (
    <section className='bg-gray-100 w-full  p-20 mb-6'>
        <div className="flex justify-center items-center  space-x-5">
            {team.map((item,index)=>(
                <ul key={index} className="">
                    <img src={item.imgT} className="flex rounded-lg  size-70" alt="" />
                    <div className="text-center bg-white p-5 rounded-lg">
                    <li className="text-2xl font-bold   ">{item.nom}</li>
                    <li className="text-xl text-gray-500">{item.profession}</li>
                    </div>
                </ul>
            ))}
        </div>
    </section>
  )
}
