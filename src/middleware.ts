export {default} from "next-auth/middleware"

//Corrobora que exista la sesión, sino no lo deja ingresar
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/documents"
  ]
}