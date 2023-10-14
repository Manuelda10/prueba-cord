import Image from "next/image"
import Button from "@/components/button/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative bg-cover bg-[linear-gradient(to_bottom,rgba(22,26,54,0.65),rgba(22,26,54,0.85)),url('/assets/bg-image.jpg')]">
      <div className="absolute left-5 top-5 flex items-center w-20">
        <Image src="/assets/logo.svg" alt="Logo" width={100} height={100} color="white" />
        <p className="break-words font-medium text-white">SISTEMA DE GESTIÓN DOCUMENTAL</p>
      </div>
      <div className="w-100 sm:w-2/3">
        <h1 className="text-center font-medium py-12 text-white text-3xl lg:text-5xl">CENTRALIZA Y SIMPLIFICA LA ADMINISTRACIÓN DE TU CONDOMINIO</h1>
      </div>
      <div className="block w-100 justify-around sm:w-1/2 md:flex">
        <Button iconUrl="/assets/admin-user.svg" text="Administrador" />
        <Button iconUrl="/assets/user.svg" text="Propietarios" />
      </div>
    </main>
  )
}
