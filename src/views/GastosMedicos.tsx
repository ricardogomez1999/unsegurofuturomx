import { useLocation } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import { Helmet } from "react-helmet-async";

export default function GastosMedicos() {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>Gastos Medicos Mayores | unsegurofuturomx </title>
        <meta
          name="description"
          content="Gastos medicos mayores para cualquier tipo de enfermedad, contactanos para darte una asesoría gratuita."
        />
      </Helmet>
      <div className=" md:flex md:h-[500px]">
        <div className=" md:bg-gastosM bg-contain bg-no-repeat bg-right md:flex flex-col md:w-1/2 p-10  bg-gray-100 rounded-lg gap-3">
          <div>
            <h1 className=" text-2xl md:text-5xl font-bold text-blue-900">
              Seguro de Gastos Medicos Mayores
            </h1>
            <h2 className="md:text-3xl my-1 text-blue-800">
              Protege Mejor tu salud y la de tus seres queridos
            </h2>
          </div>

          <p className=" md:text-2xl mx-auto flex flex-col gap-2">
            Es un instrumento que permite protegerte a ti y tus seres queridos
            ante el impacto económico que puede representar un gasto en salud.
          </p>
        </div>
        <div className="p-10 md:w-1/2 h-full mx-auto">
          <h1 className=" text-blue-900 text-2xl">
            Empieza hoy con un futuro seguro para ti y tu familia
          </h1>
          <h2 className=" text-lg">Dejanos tus datos para contactarte</h2>
          <ContactForm location={pathname} />
        </div>
      </div>
    </>
  );
}
