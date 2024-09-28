import { useForm } from "react-hook-form";
import { FormData } from "../types";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { services } from "../data";

type ContactFormProps = {
  location: string;
};

export default function ContactForm({ location }: ContactFormProps) {
  const initialValues: FormData = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    location: location,
    productType: "Selecciona",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleEmail = (data: FormData) => {
    emailjs
      .send(
        import.meta.env.VITE_API_SERVICEID,
        import.meta.env.VITE_API_TEMPLATEID2,
        data,
        import.meta.env.VITE_API_PUBLICID
      )
      .then(
        (response) => {
          toast.success(`Message sent successfully`);

          reset();
        },
        (error) => {
          toast.error(`Message not send, try again ${error}`);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(handleEmail)}
      className=" w-full space-y-3 flex flex-col py-8 text-primary"
      noValidate
    >
      <div className=" flex flex-col gap-5">
        {/* <label htmlFor="name" className=" font-normal">
              Nombre*
            </label> */}
        <input
          placeholder="Primer nombre"
          id="name"
          type="text"
          className={
            errors.name
              ? " w-full h-8 p-5 border border-red-600 rounded-lg placeholder:text-red-600"
              : " w-full h-8 p-5 border border-gray-300 rounded-lg"
          }
          {...register("name", {
            required: "El nombre es obligatorio",
          })}
        />

        {/* <label htmlFor="lastname" className=" font-normal">
              Primer apellido*
            </label> */}
        <input
          placeholder="Primer apellido"
          id="lastname"
          type="text"
          className={
            errors.lastname
              ? " w-full h-8 p-5 border border-red-600 rounded-lg placeholder:text-red-600"
              : " w-full h-8 p-5 border border-gray-300 rounded-lg"
          }
          {...register("lastname", {
            required: "El apellido es obligatorio",
          })}
        />

        {/* <label htmlFor="email" className=" font-normal">
              Correo*
            </label> */}
        <input
          placeholder="Correo electronico"
          id="email"
          type="text"
          className={
            errors.email
              ? " w-full h-8 p-5 border border-red-600 rounded-lg placeholder:text-red-600"
              : " w-full h-8 p-5 border border-gray-300 rounded-lg"
          }
          {...register("email", {
            required: "El correo es obligatorio",
          })}
        />

        {/* <label htmlFor="phone" className=" font-normal">
              Telefono*
            </label> */}
        <input
          placeholder="Número de celular"
          id="phone"
          type="text"
          className={
            errors.phone
              ? " w-full h-8 p-5 border border-red-600 rounded-lg placeholder:text-red-600"
              : " w-full h-8 p-5 border border-gray-300 rounded-lg"
          }
          {...register("phone", {
            required: "El telefono es obligatorio",
          })}
        />

        {/* <label htmlFor="productType" className=" font-normal">
              Producto
            </label> */}
        <select
          id="productType"
          className={
            errors.productType
              ? " w-full h-8 px-5 border border-red-600 rounded-lg "
              : " w-full h-8 px-5 border border-gray-300 rounded-lg"
          }
          {...register("productType", {
            required: "El servicio es obligatorio",
          })}
        >
          {services.map((item) => (
            <option key={item.title}>{item.title}</option>
          ))}
        </select>
      </div>
      <div className=" w-full flex justify-center">
        <input
          type="submit"
          value="Cotizar"
          className=" bg-blue-800 p-2 text-white cursor-pointer rounded w-24"
        />
      </div>
    </form>
  );
}
