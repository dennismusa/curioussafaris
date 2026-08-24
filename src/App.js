import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
//import BookingPage from "./components/Bookingpage";
import Home from "./components/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Daytours from "./components/Daytours";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">

        <Navbar />

        <main className="pt-20">

          <Routes>

            {/* DEFAULT REDIRECT */}
            <Route path="/" element={<Navigate to="/en/home" />} />

            {/* MULTILINGUAL ROUTES */}
            <Route path="/:lang/home" element={<Home />} />
            <Route path="/:lang/about" element={<About />} />
            <Route path="/:lang/Destinations" element={<Destinations />} />
            <Route path="/:lang/services" element={<Services />} />
            <Route path="/:lang/gallery" element={<Gallery />} />
            <Route path="/:lang/contact" element={<Contact />} />
            <Route path="/:lang/Daytours" element={<Daytours />} />
            
            

            {/* BACKWARD COMPATIBILITY (optional) */}
            <Route path="/home" element={<Navigate to="/en/home" />} />
            <Route path="/about" element={<Navigate to="/en/about" />} />
            <Route path="/Daytours" element={<Navigate to="/en/Daytours" />} />
            
            <Route path="/services" element={<Navigate to="/en/Services" />} />
            <Route path="/gallery" element={<Navigate to="/en/gallery" />} />
            <Route path="/contact" element={<Navigate to="/en/contact" />} />
            <Route path="/Destinations" element={<Navigate to="/en/Destinations" />} />
             
   
   
   
   
          </Routes>
          {/* FLOATING WHATSAPP BUTTON */}
          <WhatsAppButton />

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;