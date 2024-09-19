import { Helmet } from "react-helmet-async";
import ContactUsForm from "../Components/ContactUsForm";

export default function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Contactanos | Seguros de Vida en Mexico</title>
        <meta
          name="description"
          content="Contactanos para emepzar un seguro futuro de la mano de expertos financieros."
        />
      </Helmet>
      <h1 className=" text-5xl text-blue-900 font-bold mb-5">
        Ponte en contacto con nosotros!
      </h1>
      <h2 className=" text-3xl mb-5">
        Dejanos tus datos y nos contactaremos contigo lo antes posible!
      </h2>
      <div className=" flex-col gap-5 md:gap-0 flex md:flex-row justify-center md:h-[500px]">
        <div className=" md:w-1/2 md:overflow-hidde rounded-s-lg">
          <img
            className="w-full h-full md:object-cover md:rounded-s-lg"
            src="/ContactUS.webp"
            alt="contact us image"
          />
        </div>
        <div className="md:w-1/2 h-full flex justify-center p-10 bg-gray-300 md:rounded-e-lg">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
