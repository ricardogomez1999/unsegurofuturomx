import { useLocation } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import { Helmet } from "react-helmet-async";

export default function VidaMujer() {
  const { pathname } = useLocation();
  return (
    <>
      <Helmet>
        <title>Seguros para las mujeres | unfuturoseguromx </title>
        <meta
          name="description"
          content="Las mujeres cada vez somos más independientes y este tipo de seguros son ideales para cuidar de tu patrimonio, acercate con nosotros y empieza un futuro seguro."
        />
      </Helmet>
      <div className=" md:flex bg-gray-100 p-6 md:h-72 rounded-lg gap-3 items-center">
        <div className=" md:w-1/2 p-2 md:h-80  flex flex-col md:justify-center">
          <h1 className=" text-2xl md:text-3xl font-bold text-blue-900">
            Vida Mujer
          </h1>
          <h2 className="text-xl my-1 text-blue-800">
            Que te motive Proteger Mejor® todos los aspectos de tu vida
          </h2>
          <p className="md:text-lg mx-auto flex flex-col gap-2">
            Vida Mujer protege tu patrimonio y te brinda un atractivo esquema de
            ahorro con el que podrás materializar aquellas metas que te
            propongas. Además, contarás con anticipos de la suma asegurada que
            contrates en caso de padecer alguna enfermedad propia de las
            mujeres.
          </p>
        </div>
        <div className="md:w-1/2 rounded-lg h-64 md:overflow-hidden">
          <img
            src="/vidamujer.avif"
            alt="imagen educacion"
            className=" w-full h-full md:object-cover"
          />
        </div>
      </div>
      <div className="p-5 md:w-3/4 mx-auto">
        <h1 className=" text-blue-900 text-3xl">
          Empieza hoy con un futuro seguro para ti y tu familia
        </h1>
        <h2 className=" text-2xl">Dejanos tus datos para contactarte</h2>
        <ContactForm location={pathname} />
      </div>
    </>
  );
}
