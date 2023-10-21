import Image from "next/image"

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
        <ul className="w-[100%] flex justify-around text-white font-medium">
          <li><a href="#">Reportes</a></li>
          <li><a href="#">Documentos</a></li>
          <li><a href="#">Análisis de información</a></li>
          <li><a href="#">Seguimiento de pagos</a></li>
        </ul>
      </nav>
      <div className="flex justify-end items-center w-[25%]">
        <button className="box-border bg-transparent border-solid border-2 border-white text-white rounded-md px-3 py-1 font-medium hover:bg-white hover:text-blue-500 ease-in duration-200 mx-2">Notificaciones</button>
        <button className="box-border bg-white rounded-md px-3 py-1 border-solid border-2 border-white font-medium ease-in duration-200 text-blue-500 hover:text-white hover:bg-red-600 hover:border-red-600 mx-2">Salir</button>
      </div>
    </header>
  );
};

export default Header;
