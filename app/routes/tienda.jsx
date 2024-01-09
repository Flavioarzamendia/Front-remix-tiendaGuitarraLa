import {useLoaderData } from '@remix-run/react';
import {getGuitarras} from '~/models/guitarras.server';
import Guitarra from '~/components/guitarra';
import style from '~/styles/guitarras.css'


export function links(){
  return [
    {
      rel:'stylesheet',
      href:style
    }
  ]
}
export async function loader(){

  const guitarras = await getGuitarras();

  
  
  return guitarras.data
}

export function meta(){
  return (
    [{
        title: "GuitarLA - Tienda"
    }]
  )
}


const Tienda = () => {
  const guitarras = useLoaderData()
  
  return (
    <main className='contenedor'>
      <h2 className='heading'>Nuestra coleccion</h2>
      {guitarras?.length && (
        <div className='guitarras-grid'>
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes}
            />

          ))}
        </div>
      )}

    </main>
  )
}

export default Tienda