import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
//import BookingPage from "./components/Bookingpage";
import Home from "./components/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import About from "./components/About";
import Upcomingtrips from "./components/Upcomingtrips";
import Vehicles from "./components/Vehicles";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Aberdare from "./destination/Aberdare";
import Amboseli from "./destination/Amboseli";
import Nairobipark from "./destination/Nairobipark";
import Mountkenya from "./destination/Mountkenya";
import Hellsgate from "./destination/Hellsgate";
import Tsavoeast from "./destination/Tsavoeast";
import Tsavowest from "./destination/Tsavowest";
import LakeNakuru from "./destination/LakeNakuru";

import Meru from "./destination/Meru";
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
            <Route path="/:lang/vehicles" element={<Vehicles />} />
            <Route path="/:lang/services" element={<Services />} />
            <Route path="/:lang/gallery" element={<Gallery />} />
            <Route path="/:lang/contact" element={<Contact />} />
            <Route path="/:lang/Upcomingtrips" element={<Upcomingtrips />} />

            {/* BACKWARD COMPATIBILITY (optional) */}
            <Route path="/home" element={<Navigate to="/en/home" />} />
            <Route path="/about" element={<Navigate to="/en/about" />} />
            <Route path="/vehicles" element={<Navigate to="/en/vehicles" />} />
            <Route path="/bookingpage" element={<Navigate to="/en/bookingpage" />} />
            <Route path="/services" element={<Navigate to="/en/Services" />} />
            <Route path="/gallery" element={<Navigate to="/en/gallery" />} />
            <Route path="/contact" element={<Navigate to="/en/contact" />} />
            <Route path="/Upcomingtrips" element={<Navigate to="/en/Upcomingtrips" />} />
             <Route path="/aberdare" element={<Aberdare />} />
   <Route path="/amboseli" element={<Amboseli />} />
   <Route path="/nairobipark" element={<Nairobipark />} />
   <Route path="/mountkenya" element={<Mountkenya />} />
   <Route path="/hellsgate" element={<Hellsgate />} />
   <Route path="/tsavoeast" element={<Tsavoeast />} />
   
   
   <Route path="/tsavowest" element={<Tsavowest />} />
   <Route path="/lakenakuru" element={<LakeNakuru />} />
   <Route path="/meru" element={<Meru />} />

          </Routes>
          {/* FLOATING WHATSAPP BUTTON */}
          <WhatsAppButton />

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;