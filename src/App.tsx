import Navbar from "./Components/Navbar";
import TitleSection from "./Components/TitleSection";
import AboutPage from "./Pages/aboutPage";
import HomePage from "./Pages/homePage";
import ContactPage from "./Pages/contactPage";
import PricePage from "./Pages/pricePage";
import Skills from "./Components/Skills";
import PortfolioPage from "./Pages/Portfolio";
import TeamPage from "./Pages/teamPage";
import ServicePage from "./Pages/servicePage";
 import Testimonials from "./Pages/Testimonials";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ServiceDetail from "./Components/serviceDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        {/* <Route path="/service/:id" element={<ServiceDetail />} /> */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/pricing" element={<PricePage color={""} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <section className="">
        {/* <HomePage />   */}
        <AboutPage />
        <ServicePage />
        {/* <ServiceDetail /> */}
        <TitleSection title="Our Skills" color="text-slate-900 mt-20" />
        <Skills />
        <PortfolioPage />
        
        <TeamPage />

         <PricePage color={""} />        <ContactPage /> 
      </section>
    </BrowserRouter>
  );
}

export default App;
