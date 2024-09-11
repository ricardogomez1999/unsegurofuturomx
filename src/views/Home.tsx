import Services from "../Components/Services";

export default function Home() {
  return (
    <div className="md:bg-homeBg bg-contain bg-no-repeat bg-right">
      <div className=" md:w-3/4">
        <h3 className=" text-3xl md:text-4xl">
          Bienvenidos a unfuturoseguromx{" "}
        </h3>
        <h1 className=" text-blue-800 font-bold text-4xl md:text-6xl">
          Disfruta de un seguro futuro con nuestros productos.{" "}
          <span className=" text-black">Olvidate de preocupaciones</span>
        </h1>
      </div>
      <div className=" w-full h-96">
        <Services />
      </div>
    </div>
  );
}
