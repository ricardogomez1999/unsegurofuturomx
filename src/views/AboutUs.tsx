import { Helmet } from "react-helmet-async";

export default function AboutUs() {
  return (
    <div className=" md:flex h-[550px]">
      <Helmet>
        <title>
          Acerca de Nosotros | Conoce como pondemos ayudarte en tu futuro
          <meta
            name="description"
            content="En UnFuturoSeguroMX estamos orgullosos de tener más de 300 clientes los cuales ya cuentan con una seguridad para su futuro"
          />
        </title>
      </Helmet>
      <div className=" bg-gray-100 flex md:w-1/2 py-8 px-10 flex-col justify-start rounded-xl">
        <div>
          <h1 className=" text-3xl md:text-5xl text-blue-900">
            En unfuturoseguromx
          </h1>
          <h2 className=" text-2xl md:text-4xl mb-5">
            Cuidamos tu patrimonio y de tus seres queridos
          </h2>
        </div>

        <p className=" md:text-lg">
          Sabemos que la seguridad de tu familia y tus seres queridos es tu
          mayor prioridad, y por eso, en nuestros planes de seguros encontrarás
          la tranquilidad que necesitas para proteger su bienestar y asegurar su
          futuro. Con nuestros diversos productos, puedes tener la confianza de
          que tu patrimonio y tu familia estarán siempre protegidos, respaldados
          por el prestigio y la solidez de Seguros Monterrey y New York Life.
          Nuestro compromiso es brindarte las mejores soluciones para que
          disfrutes de cada momento sabiendo que todo lo que más valoras está en
          buenas manos.
        </p>
      </div>
      <div className=" md:w-1/2 p-8">
        <div className=" h-1/2 w-full md:overflow-hidden rounded-xl">
          <img
            className="md:object-cover h-full w-full"
            src="/aboutUs.webp"
            alt="about us"
          />
        </div>
        <div className=" flex flex-col  md:grid grid-cols-2 grid-rows-2 gap-4 my-5 h-1/2 w-full">
          <div className=" bg-gray-100 rounded-lg flex flex-col justify-center md:px-5 p-5 h-full w-full">
            <h1 className=" text-center md:text-start text-4xl">180</h1>
            <p className=" text-center md:text-start">clientes satisfechos</p>
          </div>
          <div className=" bg-gray-100 rounded-lg flex flex-col justify-center md:px-5 p-5 h-full w-full">
            <h1 className=" text-center md:text-start text-4xl">+$24M</h1>
            <p className=" text-center md:text-start">En sumas aseguradas</p>
          </div>
          <div className=" bg-gray-100 rounded-lg flex flex-col justify-center md:px-5 p-5 h-full w-full">
            <h1 className=" text-center  md:text-start text-4xl">+5</h1>
            <p className=" text-center md:text-start"> Años de experiencia</p>
          </div>
          <div className=" bg-gray-100 rounded-lg flex flex-col justify-center md:px-5 p-5 h-full w-full">
            <h1 className=" text-center md:text-start text-4xl">+40</h1>
            <p className=" text-center md:text-start">Familias seguras</p>
          </div>
        </div>
      </div>
    </div>
  );
}
