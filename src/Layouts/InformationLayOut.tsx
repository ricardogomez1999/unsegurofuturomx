import { Link, Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { ToastContainer } from "react-toastify";
import Logo from "../Components/Logo";
import BurgerMenu from "../Components/BurgerMenu";
import "react-toastify/dist/ReactToastify.css";
import IconSegurosMonterrey from "../Components/IconSegurosMonterrey";
import ContactFormModal from "../Components/ContactFormModal";

export default function InformationLayOut() {
  return (
    <>
      <header className=" flex w-full justify-around p-8 items-center gap-24">
        <div className=" w-64">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className=" hidden md:block">
          <NavBar />
        </div>

        <div className=" hidden md:block">
          <ul className=" flex gap-5">
            <li>
              <a
                href="https://www.facebook.com/faviolaguirreasesorafinanciera"
                target="_blank"
              >
                <img src="./fbLogo.svg" alt="facebook logo" className=" w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/unfuturoseguromx/"
                target="_blank"
              >
                <img
                  src="./instaLogo.svg"
                  alt="facebook logo"
                  className=" w-6"
                />
              </a>
            </li>
          </ul>
        </div>
        <BurgerMenu />
      </header>
      <main className=" max-w-screen-xl mx-auto md:mt-10 p-5 relative">
        <Outlet />
        <IconSegurosMonterrey />
        <ContactFormModal />
      </main>
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
