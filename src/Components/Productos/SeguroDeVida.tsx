import { useLocation } from "react-router-dom";
import ContactForm from "../ContactForm";

export default function SeguroDeVida() {
  const { pathname } = useLocation();
  return (
    <>
      <div className=" md:flex bg-gray-100 p-6 md:h-72 rounded-lg gap-3 items-center">
        <div className=" md:w-1/2 p-2 md:h-80  flex flex-col md:justify-center">
          <h1 className=" text-2xl md:text-3xl font-bold text-blue-900">
            Seguro de Vida
          </h1>
          <h2 className="text-xl my-1 text-blue-800">
            Protege el futuro de tus seres queridos
          </h2>
          <p className=" md:text-lg mx-auto flex flex-col">
            Es un instrumento que principalmente busca proteger a tu familia y
            tu patrimonio en caso de fallecimiento o invalidez. Dado que estas
            situaciones pueden afectar la estabilidad financiera de tu familia o
            seres queridos, la protección de un Seguro les proporciona los
            recursos para evitarlo.
          </p>
        </div>
        <div className="md:w-1/2 rounded-lg h-64 md:overflow-hidden">
          <img
            src="/segurovida.png"
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
