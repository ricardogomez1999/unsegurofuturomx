import { Link } from "react-router-dom";
import { Service } from "../types";

type CardProps = {
  service: Service;
};

export default function Card({ service }: CardProps) {
  return (
    <Link
      to={`/${service.title.replace(/\s+/g, "").toLowerCase()}`}
      className=" h-48 w-full md:h-full shadow-md rounded-lg flex justify-center items-center p-5 gap-4 bg-white"
    >
      <div className=" w-1/4">
        <img src={`${service.logo}.svg`} alt={`${service.title}`} />
      </div>
      <div className=" w-3/4">
        <h1 className=" capitalize font-bold">{service.title}</h1>
        <p>{service.text}</p>
      </div>
    </Link>
  );
}
