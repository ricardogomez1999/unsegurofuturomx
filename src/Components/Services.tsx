import { services } from "../data";
import Card from "./Card";
import ProductsTabs from "./ProductsTabs";

export default function Services() {
  return (
    <div
      className=" p-10 bg-white/50 rounded-lg mt-3
h-fit"
    >
      <h1 className=" text-xl font-bold text-blue-800 my-8 md:my-0">
        Selecciona un producto para cotizar
      </h1>
      <div className=" hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-4 mt-5 h-fit">
        {services.map((service) => (
          <Card service={service} />
        ))}
      </div>
      <ProductsTabs />
    </div>
  );
}
