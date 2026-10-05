// import TitleSection from "./Components/TitleSection";
import AboutPage from "./Pages/aboutPage";
 import HomePage from "./Pages/homePage";
import ContactPage from "./Pages/contactPage";
import PricePage from "./Pages/pricePage";
 import PortfolioPage from "./Pages/Portfolio";
 import TeamPage from "./Pages/teamPage";
import ServicePage from "./Pages/servicePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceDetail from "./Components/serviceDetail";
import Dasboart from "./Components/dasboart";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route element={<Dasboart />}>
          <Route path="/" element={<HomePage />} />
         <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
         <Route path="/portfolio" element={<PortfolioPage />} />
         <Route path="/testimonial" element={<Testimonials/>}/>
        <Route path="/team" element={<TeamPage />} />
        <Route path="/pricing" element={<PricePage color={""} />} />
        <Route path="/contact" element={<ContactPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
