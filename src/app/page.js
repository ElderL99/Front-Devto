import Layout from '../components/layout/layout'
import React from 'react'

export default function Home() {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto grid grid-cols-[1fr_2fr_1fr] gap-4 px-4 py-8">
        <section className="bg-blue-100 p-4 rounded-lg">Sección 1</section>
        
        <section className="bg-blue-200 p-4 rounded-lg flex flex-col">
          {/* Contenedor de botones */}
          <div className="mb-4 flex gap-4">
            <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">Relevant</button>
            <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">Last</button>
            <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">Top</button>
          </div>

          {/* Contenido debajo de los botones */}
          <div>
            Contenido de la sección 2 aquí
          </div>
        </section>

        <section className="bg-blue-300 p-4 h-[calc(100vh-8rem)] rounded-lg">Sección 3</section>
      </div>
    </Layout>
  )
}
