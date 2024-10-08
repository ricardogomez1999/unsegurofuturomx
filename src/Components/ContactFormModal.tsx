import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition, CloseButton } from "@headlessui/react";
import ContactUsForm from "./ContactUsForm";
import { XMarkIcon } from "@heroicons/react/16/solid";

export default function ContactFormModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 10000);
  }, []);

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 w-1/2"
          onClose={() => {
            setShow(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="md:w-1/2 max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-6 md:p-16">
                  <CloseButton className="w-full flex justify-end">
                    <XMarkIcon className="w-8" />
                  </CloseButton>
                  <Dialog.Title
                    as="h3"
                    className="font-bold text-xl md:text-4xl text-center  my-5"
                  >
                    No pierdas la oportunidad de un futuro seguro
                  </Dialog.Title>

                  <p className=" text-md md:text-xl text-center">
                    Dejanos tus datos para una asesoría {""}
                    <span className="text-blue-800 font-bold">
                      completamente gratuita
                    </span>
                  </p>
                  <ContactUsForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
