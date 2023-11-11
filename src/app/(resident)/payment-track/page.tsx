"use client";
import { useQuery, ApolloProvider} from '@apollo/client';
import { GET_ALL_ITEMS } from '@/app/api/services/queries';
import Header from "@/components/header/Header"

const PaymentTrack = () => {
  //const [data, setData] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_ITEMS);
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Verifica que data.GetAll exista y sea un array
  if (!data || !data.GetAll) return <p>No hay datos disponibles.</p>;

  return (
    <div>
      <Header/>
        <div className="flex justify-center items-center">
          <div className="w-[80%] my-12">
            <h1 className="font-semibold text-2xl">SEGUIMIENTO</h1>
            <p className="mt-2">Información de los departamentos con deudas pendientes de pago</p>
            <div className='bg-gray-200 py-2 my-4 flex'>
              <input type='search' placeholder='Nombre o apellidos' className='border-solid border-2 border-gray-300 px-3 py-[5px] rounded-sm outline-none focus:border-blue-500 mx-2 '></input>
              <button className='rounded-md px-4 bg-white text-gray-600 mx-2 hover:text-gray-900 ease-in duration-200'>
                Filtrar
              </button>
            </div>
            <div className='py-2 my-4'>
            <table className='w-[100%]'>
              <thead className='text-left text-gray-500 border-b-2 border-gray-300'>
                <tr>
                  <th>Departamento</th>
                  <th>Servicio</th>
                  <th>Fecha de pago</th>
                  <th>Estado</th>
                  <th>Cantidad</th>
                  {/* Agrega más columnas estáticas si es necesario */}
                </tr>
              </thead>
              <tbody className='text-left'>
                {data.GetAll.map((row:any, index:any) => (
                  <tr key={index} className='border-b-2 border-gray-300'>
                    <td>{row.departamento}</td>
                    <td>{row.tipo_de_servicio}</td>
                    <td>{row.fecha_de_pago}</td>
                    <td className='flex' >
                      <span className='border rounded-md bg-green-50 text-green-600 font-medium p-1'>
                        Aprobado
                      </span>
                    </td>
                    <td>$500</td>
                    {/* Renderiza más celdas de acuerdo a tus datos */}
                    
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default PaymentTrack