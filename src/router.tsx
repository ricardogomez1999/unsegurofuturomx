import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import InformationLayOut from "./Layouts/InformationLayOut";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";
import SeguroDeVida from "./views/SeguroDeVida";
import GastosMedicos from "./views/GastosMedicos";
import VidaMujer from "./views/VidaMujer";
import StarDotal from "./views/StarDotal";
import Educacion from "./views/Educacion";
import SeguroDeAhorro from "./views/SeguroDeAhorro";
import AvisoDePrivacidad from "./views/AvisoDePrivacidad";
import { HelmetProvider } from "react-helmet-async";

export default function Router() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<InformationLayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/segurodevida" element={<SeguroDeVida />} />
            <Route path="/gastosmedicos" element={<GastosMedicos />} />
            <Route path="/vidamujer" element={<VidaMujer />} />
            <Route path="/stardotal" element={<StarDotal />} />
            <Route path="/educacion" element={<Educacion />} />
            <Route path="/segurodeahorro" element={<SeguroDeAhorro />} />
            <Route
              path="/aviso-de-privacidad"
              element={<AvisoDePrivacidad />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
