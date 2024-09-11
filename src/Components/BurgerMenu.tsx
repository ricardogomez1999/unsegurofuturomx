import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

export default function BurgerMenu() {
  return (
    <Popover className="relative md:hidden">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-primary">
        <Bars3Icon className=" w-8 h-8 text-blue-800" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 flex w-screen  lg:max-w-min -translate-x-1/2">
          <div className="w-1/2 rounded-xl bg-white p-2 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <div className=" w-full h-fit">
              <ul className="flex flex-col justify-center items-center gap-3">
                <li>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                  >
                    Acerca de nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactus"
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "font-normal"
                    }
                  >
                    Contactanos
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
