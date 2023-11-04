import Image from "next/image"
import ButtonAuth from "../button/ButtonAuth";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 flex justify-between sticky">
      <div className="w-[25%]">
        <div className="flex items-center w-20">
          <Image src="/assets/logo.svg" alt="Logo" width={60} height={60} color="white" />
          <p className="text-xs text-white font-medium" >SISTEMA DE GESTIÓN DOCUMENTAL</p>
        </div>
      </div>
      <nav className="w-[50%] flex justify-center items-center">
        <ul className="w-[100%] flex justify-around text-gray-100  font-medium">
          <li className="hover:text-white"><Link href="/reports" replace>Reportes</Link></li>
          <li className="hover:text-white"><Link href="/documents" replace>Documentos</Link></li>
          <li className="hover:text-white"><Link href="/documents" replace>Análisis de información</Link></li>
          <li className="hover:text-white"><Link href="/payment-track" replace>Seguimiento de pagos</Link></li>
        </ul>
      </nav>
      <div className="flex justify-end items-center w-[25%]">
        <button className="box-border bg-transparent border-solid border-2 border-white text-white rounded-md px-3 py-1 font-medium hover:bg-white hover:text-blue-500 ease-in duration-200 mx-2">Notificaciones</button>
        <ButtonAuth/>
      </div>
    </header>
  );
};

export default Header;
