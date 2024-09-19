import { Helmet } from "react-helmet-async";

export default function AvisoDePrivacidad() {
  return (
    <div>
      <Helmet>
        <title>Aviso de Privacidad | unfuturoseguromx</title>
        <meta name="description" content="Aviso de privacidad" />
      </Helmet>
      <h1 className=" text-3xl font-bold my-3">AVISO DE PRIVACIDAD</h1>

      <p className=" text-lg">
        Faviola Aide Aguirre Sanchez, con domicilio en Gral Medardo de la Peña
        725, Alpes Nte., 25254 Saltillo, Coah., y correo electrónico de contacto
        faviola.aguirre@hotmail.com, es la responsable de la recolección y
        tratamiento de los datos personales proporcionados por los usuarios de
        este sitio web.
      </p>

      <h2 className=" text-xl font-bold my-3">Datos que Recopilamos</h2>

      <p className=" text-lg">
        Recopilamos información proporcionada voluntariamente por los usuarios,
        como nombre, correo electrónico y número de teléfono. Además, se recoge
        información automáticamente, como la dirección IP, tipo de navegador y
        páginas visitadas, mediante el uso de cookies.
      </p>
      <h2 className=" text-xl font-bold my-3">
        Finalidades del Tratamiento de los Datos
      </h2>

      <p className=" text-lg font-bold my-2">
        Los datos personales serán utilizados para las siguientes finalidades:
      </p>

      <ul className=" text-lg list-disc">
        <li>Responder a consultas enviadas por los usuarios.</li>
        <li>
          Enviar información relacionada con nuestros productos o servicios.
        </li>
        <li>Personalizar la experiencia del usuario en nuestro sitio web.</li>
      </ul>

      <h2 className=" text-xl font-bold my-3">
        Base Legal para el Tratamiento de Datos
      </h2>

      <p className=" text-lg">
        La base legal para el tratamiento de los datos personales es el
        consentimiento del usuario, otorgado al aceptar este aviso de privacidad
        y al proporcionar voluntariamente su información personal.
      </p>

      <h2 className=" text-xl font-bold my-3">Compartición de Datos</h2>

      <p className=" text-lg">
        Los datos personales no serán compartidos con terceros, salvo cuando sea
        necesario para cumplir con obligaciones legales o cuando se contraten
        servicios con terceros, como proveedores de hosting, marketing o
        análisis de datos.
      </p>

      <h2 className=" text-xl font-bold my-3">
        Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
      </h2>

      <p className=" text-lg">
        El titular de los datos personales tiene derecho a acceder, rectificar,
        cancelar u oponerse al tratamiento de sus datos personales. Para ejercer
        cualquiera de estos derechos, los usuarios pueden enviar una solicitud
        al correo faviola.aguirre@hotmail.com.
      </p>

      <h2 className=" text-xl font-bold my-3">Seguridad de los Datos</h2>

      <p className=" text-lg">
        Se implementan medidas de seguridad físicas, técnicas y administrativas
        para proteger los datos personales contra el acceso no autorizado,
        pérdida o uso indebido.
      </p>

      <h2 className=" text-xl font-bold my-3">Uso de Cookies</h2>
      <p className=" text-lg">
        Este sitio web utiliza cookies para mejorar la experiencia del usuario.
        Para obtener más información sobre el uso de cookies y cómo
        controlarlas, consulte nuestra Política de Cookies.
      </p>

      <h2 className=" text-xl font-bold my-3">
        Modificaciones al Aviso de Privacidad
      </h2>

      <p className=" text-lg">
        Este aviso de privacidad puede ser modificado en cualquier momento.
        Cualquier cambio será notificado a través de este sitio web. Se
        recomienda a los usuarios revisar periódicamente este aviso de
        privacidad.
      </p>
      <h2 className=" text-xl font-bold my-3">Legislación Aplicable</h2>

      <p className=" text-lg">
        Este aviso de privacidad se rige por la Ley Federal de Protección de
        Datos Personales en Posesión de los Particulares (LFPDPPP) de México.
      </p>
    </div>
  );
}
