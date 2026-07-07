import Navbar from "./Components/Navbar";
// import Skills from "./Components/Skills";
 import TitleSection from './Components/TitleSection'
import AboutPage from "./Pages/aboutPage";
 import HomePage from "./Pages/homePage";
//  import ContactPage from "./Pages/contactPage";
import PricePage from "./Pages/pricePage";
 import PortfolioPage from "./Pages/Portfolio";
import TeamPage from "./Pages/teamPage";
import ServicePage from "./Pages/servicePage";
// import Testimonials from "./Pages/Testimonials";
import { BrowserRouter, Route, Routes} from "react-router-dom";

  
function App() {
  return (
    
 <BrowserRouter>
  <Navbar/>
  {/* Routes */}
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/services' element={<ServicePage/>} /> 
           <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/pricing" element={<PricePage color={""} />} />
         </Routes>   
   <section className="">
      <HomePage />
       <AboutPage />  
           <TitleSection title="Our Services" color="text-slate-900" />
       <ServicePage /> 
         <TitleSection title="Our Skills" color="text-slate-900" />
          <PortfolioPage />
             <TitleSection title="Our Team" color="text-slate-900 bg-gray-100  p-5 w-full" /> 
          <TeamPage /> 
             
               <PricePage color={""} /> 
               {/* <Testimonials />  */}
           {/* <ContactPage /> */}
            {/* <Skills />  */}
          
                  
            
   </section>
     
</BrowserRouter>
   
  );
}

export default App;
