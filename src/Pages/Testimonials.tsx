// import TitleSection from '../Components/TitleSection';
// import { testimonial } from '../constant';

   type Props = {
    page:number;
    totalPage : number ;
    OnPrev:() => void;
    OnNext : () => void;
  }



export default function Testimonials({page,totalPage,OnPrev,OnNext}:Props) {
  //Pagination logique


  return (
    <section>
      <div className="flex justify-between items-center mt-6">
        <button 
        type="button"
        onClick={OnPrev}
        disabled={page <= 1}
        >
          Précédent
        </button>
        <p>page <span>{page}/{totalPage}</span></p>
        <button type="button"
        onClick={OnNext}
        disabled={page >= totalPage}>
          Suivant        
        </button>
      </div>
      {/* <TitleSection title="Our Testimonials" color="text-slate-900" />
      <div>
        {testimonial.map((item,index)=>(
          <div key={index}>
            <div>
              {item.description}
            </div>
            <div>
              <img src={item.img} alt="images" />
              <p>{item.nom}</p>
              <p>{item.poste}</p>
            </div>
          </div>
          
        ))}
      </div> */}
 
    </section>
  )
}
