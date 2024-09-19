import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import InformationLayOut from "./Layouts/InformationLayOut";
import { HelmetProvider } from "react-helmet-async";
const AboutUs = lazy(() => import("./views/AboutUs"));
const ContactUs = lazy(() => import("./views/ContactUs"));
const SeguroDeVida = lazy(() => import("./views/SeguroDeVida"));
const GastosMedicos = lazy(() => import("./views/GastosMedicos"));
const VidaMujer = lazy(() => import("./views/VidaMujer"));
const StarDotal = lazy(() => import("./views/StarDotal"));
const Educacion = lazy(() => import("./views/Educacion"));
const SeguroDeAhorro = lazy(() => import("./views/SeguroDeAhorro"));
const AvisoDePrivacidad = lazy(() => import("./views/AvisoDePrivacidad"));
const Home = lazy(() => import("./views/Home"));

export default function Router() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<InformationLayOut />}>
            <Route
              path="/"
              element={
                <Suspense fallback="Loading...">
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/aboutus"
              element={
                <Suspense fallback="Loading...">
                  <AboutUs />
                </Suspense>
              }
            />
            <Route
              path="/contactus"
              element={
                <Suspense fallback="Loading...">
                  <ContactUs />
                </Suspense>
              }
            />
            <Route
              path="/segurodevida"
              element={
                <Suspense fallback="Loading...">
                  <SeguroDeVida />
                </Suspense>
              }
            />
            <Route
              path="/gastosmedicos"
              element={
                <Suspense fallback="Loading...">
                  <GastosMedicos />
                </Suspense>
              }
            />
            <Route
              path="/vidamujer"
              element={
                <Suspense fallback="Loading...">
                  <VidaMujer />
                </Suspense>
              }
            />
            <Route
              path="/stardotal"
              element={
                <Suspense fallback="Loading...">
                  <StarDotal />
                </Suspense>
              }
            />
            <Route
              path="/educacion"
              element={
                <Suspense fallback="Loading...">
                  <Educacion />
                </Suspense>
              }
            />
            <Route
              path="/segurodeahorro"
              element={
                <Suspense fallback="Loading...">
                  <SeguroDeAhorro />
                </Suspense>
              }
            />
            <Route
              path="/aviso-de-privacidad"
              element={
                <Suspense fallback="Loading...">
                  <AvisoDePrivacidad />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
