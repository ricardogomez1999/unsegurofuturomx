import { useLocation } from "react-router-dom";
import ContactForm from "../ContactForm";

export default function SeguroDeAhorro() {
  const { pathname } = useLocation();
  return (
    <>
      <div className=" md:flex bg-gray-100 p-6 md:h-72 rounded-lg gap-3 items-center">
        <div className=" md:w-1/2 p-2 md:h-80  flex flex-col md:justify-center">
          <h1 className=" text-2xl md:text-3xl font-bold text-blue-900">
            ¿Que es un seguro de ahorro?
          </h1>
          <h2 className="text-xl my-1 text-blue-800">
            Protección más ahorro al alcance de tu bolsillo.
          </h2>
          <p className=" md:text-lg mx-auto flex flex-col gap-2">
            Con este Seguro de Vida te ayudamos a cumplir tus metas durante el
            periodo en el que estas iniciando tus labores. Puedes protegerte a
            bajo costo y adicional ahorrar tus excedentes para conformar un
            capital a largo plazo.
          </p>
        </div>
        <div className="md:w-1/2 rounded-lg h-64 md:overflow-hidden">
          <img
            src="/ahorro.webp"
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
