import { Helmet } from "react-helmet-async";
import ContactUsForm from "../Components/ContactUsForm";

export default function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Contactanos | Seguros de Vida en Mexico</title>
      </Helmet>
      <h1 className=" text-5xl text-blue-900 font-bold">
        Ponte en contacto con nosotros!
      </h1>
      <h2 className=" text-3xl mb-5">
        Dejanos tus datos y nos contactaremos contigo lo antes posible!
      </h2>
      <div className=" flex-col flex md:flex-row bg-gray-300 rounded-lg justify-center items-center">
        <div className=" md:w-1/2 p-5 h-96 md:overflow-hidde">
          <img
            className="w-full h-full md:object-cover"
            src="/ContactUS.webp"
            alt="contact us image"
          />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
