// Archivo: src/Rifa.jsx

import React from 'react'
import './Rifa.css' // Importamos nuestro CSS

export default function Rifa() {
  return (
    <div className="rifa-container">
      <header className="rifa-header">
        <h1>Gran Rifa de la Iglesia</h1>
        <p>¡Participa y apoya nuestra comunidad!</p>
      </header>

      <main className="premio-principal">
        <div className="tarjeta-premio">
          <h2>Premio Principal</h2>
          <p className="premio-descripcion">
            Una increíble canasta de regalo valorada en $2,000
          </p>
          <div className="detalle-premio">
            Incluye productos locales, artesanías y más.
          </div>
        </div>
      </main>

      <section className="info-seccion">
        <div className="info-item">
          <strong>Precio del Boleto:</strong> $50 MXN
        </div>
        <div className="info-item">
          <strong>Fecha del Sorteo:</strong> 24 de Diciembre
        </div>
        <div className="info-instrucciones">
          <h3>¿Cómo participar?</h3>
          <p>Puedes comprar tus boletos en la oficina parroquial todos los domingos después de misa o contactando a la secretaría.</p>
        </div>
      </section>
    </div>
  );
}