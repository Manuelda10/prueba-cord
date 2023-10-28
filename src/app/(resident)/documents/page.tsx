"use client";

import { useSession } from 'next-auth/react';
import {useState, useEffect, useRef} from 'react';
import Header from '@/components/header/Header';
import { processPDF, getFormattedInfo } from '@/utils/utils';
import {getDocuments, createDocument} from '@/server-actions/api';

const DocumentsPage = () => {
  const {data: session, status} = useSession()
  const fileRef = useRef<HTMLInputElement>(null)
  const [pdfInfo, setPDFInfo] = useState<any>({})
  const [data, setData] = useState<any[]>([])

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      return;
    }
    const dataPDFText = await processPDF(file)
    const dataPDF = getFormattedInfo(dataPDFText)
    setPDFInfo(dataPDF)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("DATA A ENVIAR: ", pdfInfo)
    const createdDocument = await createDocument(pdfInfo)
    setData([...data, createdDocument])
  }

  
  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    //Mensaje en caso no se haya logueado. En el futuro se colocará una vista por defecto
    if (!session) {
      return;
    }

    getDocuments().then((res) => {
      setData(res)
    })
  }, [status, session])

  return (
    <>
      <Header/>
      <div className='flex justify-center items-center'>
        <div className='w-[80%] my-12'>
          <h1 className='font-semibold text-2xl'>DOCUMENTOS</h1>
          <p className='mt-2' >Visualizar archivos y subir nuevos archivos. Welcome, {session?.user?.name}!</p>
          <div className='bg-gray-200 py-2 my-4 flex'>
            <input type='date' placeholder='Fecha de pago' alt='fecha de pago' className='border-solid border-2 border-gray-300 px-3 py-1 rounded-sm outline-none focus:border-blue-500 mx-2'></input>
            <input type='search' placeholder='Tipo de servicios' className='border-solid border-2 border-gray-300 px-3 py-[5px] rounded-sm outline-none focus:border-blue-500 mx-2 '></input>
            <button className='rounded-md px-4 bg-white text-gray-600 mx-2 hover:text-gray-900 ease-in duration-200'>
              Filtrar
            </button>
            <form onSubmit={handleSubmit} className='flex'>
              <div className='w-[70%]'>
                <input ref={fileRef} className="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-non file:bg-blue-600 file:rounded-sm file:outline-none file:text-white file:border-0 file:px-4 file:py-1.5" onChange={handleFileChange} accept=".pdf" id="file_input" type="file" name="file"/>
              </div>
              <input type='submit' value="Añadir" className='rounded-md px-4 py-1.5 bg-blue-600 text-white mx-2 hover:bg-blue-700 ease-in duration-200 hover:cursor-pointer'/>
            </form>
            
          </div>
          <div className='py-2 my-4'>
          <table className='w-[100%]'>
            <thead className='text-left'>
              <tr>
                <th>Departamento</th>
                <th>Residente</th>
                <th>Fecha de pago</th>
                <th>Servicio</th>
                <th>Archivo</th>
                {/* Agrega más columnas estáticas si es necesario */}
              </tr>
            </thead>
            <tbody className='text-left'>
              {data.map((row:any, index) => (
                <tr key={index}>
                  <td>{row.departamento}</td>
                  <td>{row.residente}</td>
                  <td>{row.fecha_de_pago}</td>
                  <td>{row.tipo_de_servicio}</td>
                  <td className='text-left'>
                    <button className='rounded-md bg-blue-500 text-white hover:bg-blue-700 px-3 py-1 m-1 ease-in duration-200' >Ver</button>
                    <button className='rounded-md bg-blue-500 text-white hover:bg-blue-700 px-3 py-1 m-1 ease-in duration-200'>Editar</button>
                    <button className='rounded-md bg-red-500 text-white hover:bg-red-700 px-3 py-1 m-1 ease-in duration-200'>Eliminar</button>
                  </td>
                  {/* Renderiza más celdas de acuerdo a tus datos */}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentsPage;
