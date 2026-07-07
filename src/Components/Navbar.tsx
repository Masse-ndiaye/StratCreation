import { Link } from "react-router-dom";
import { navList } from "../constant";
// import HomePage from "../Pages/homePage";
// import AboutPage from "../Pages/aboutPage";
// import PortfolioPage from "../Pages/Portfolio";
// // import ServicePage from '../Pages/servicePage'
// import TeamPage from "../Pages/teamPage";
// import PricePage from "../Pages/pricePage";
// import ContactPage from "../Pages/contactPage";
import logo from "../Components/assets/logo.png";

export default function Navbar() {
  return (
   
        <section className=" fixed top-0 left-0 w-full z-50">
        {/* Navigation */}

        <div className=" flex space-x-10 w-full p-8  bg-slate-950">
            <img src={logo} alt="logo" />
          {navList.map((item, index) => (
            <nav key={index} className=" text-white  hover:text-green-500 ">
              <Link to={item.lien}> {item.nom}</Link>
            </nav>
          ))}
          
        </div>
        
           {/*<Route path="/contact" element={<ContactPage />} />*/} 
      </section>
       
  );
}
