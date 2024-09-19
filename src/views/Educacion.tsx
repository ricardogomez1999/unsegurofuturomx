import { useLocation } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import { Helmet } from "react-helmet-async";

export default function Educacion() {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>Seguros de Educacion en Mexico </title>
        <meta
          name="description"
          content="Asegura la educación de tus hijos, con los seguro de educación te aseguras que tu hijo tenga un futuro brillante, dale un futuro seguro."
        />
      </Helmet>
      <div className=" md:flex bg-gray-100 p-6 md:h-72 rounded-lg gap-3 items-center">
        <div className=" md:w-1/2 p-2 md:h-80  flex flex-col md:justify-center">
          <h1 className=" text-2xl md:text-3xl font-bold text-blue-900">
            SeguBeca
          </h1>
          <h2 className="text-xl my-1 text-blue-800">
            Anticípate al futuro, ¡asegura su educación!
          </h2>
          <ul className=" list-disc md:text-xl w-5/6 mx-auto flex flex-col gap-2">
            <li>
              Garantiza su educación para encaminarlos al éxito profesional.
            </li>
            <li>Asegura tu vida y la de tu pareja, al mismo tiempo.</li>
            <li>
              Ahorra de forma confiable y segura, sin arriesgar tu capital.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 rounded-lg h-64 md:overflow-hidden">
          <img
            src="/segubeca.webp"
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
