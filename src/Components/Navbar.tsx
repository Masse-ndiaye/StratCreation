import { NavLink} from "react-router-dom";
import { navList } from "../constant";

import logo from "../Components/assets/logo.png";

export default function Navbar() {
  return (
   
        <section className=" fixed top-0 left-0 w-full z-10">
        {/* Navigation */}

        <div className=" flex space-x-10 w-full p-8  bg-slate-950">
            <img src={logo} alt="logo" />
          {navList.map((item, index) => (
            <nav key={index} className=" text-white space-x-0  hover:text-green-500 ">
              <NavLink to={item.lien}> {item.nom}</NavLink>
            </nav>
          ))}
          
        </div>
        
        
      </section>
       
  );
}
