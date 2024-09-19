import { useLocation } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import { Helmet } from "react-helmet-async";

export default function StarDotal() {
  const { pathname } = useLocation();
  return (
    <>
      <Helmet>
        <title>Seguros de ahorro | Invierte seguro con nosotros </title>
        <meta
          name="description"
          content="Los seguros de ahorro de seguros monterrey son ideales para jovenes y adultos que busquen su libertad financiera, unete a nosotros y empieza tu futuro seguro."
        />
      </Helmet>
      <div className=" md:flex bg-gray-100 p-6 md:h-72 rounded-lg gap-3 items-center">
        <div className=" md:w-1/2 p-2 md:h-80  flex flex-col md:justify-center">
          <h1 className=" text-2xl md:text-3xl font-bold text-blue-900">
            Star Dotal
          </h1>
          <h2 className="text-xl my-1 text-blue-800">
            El ahorro que necesitas para alcanzar tus metas.
          </h2>
          <p className=" md:text-lg mx-auto flex flex-col">
            Si tienes el hábito de ahorrar y te preocupas por tu familia, este
            seguro es ideal para ti. Star Dotal es un seguro de vida que te
            genera un ahorro mientras estas protegido, y cuando tu plan llega a
            su vencimiento recibes el dinero para realizar tus metas y sueños.
          </p>
        </div>
        <div className="md:w-1/2 rounded-lg h-64 md:overflow-hidden">
          <img
            src="/stardotal.avif"
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
