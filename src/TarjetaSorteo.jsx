import React from 'react';
import './GaleriaSorteos.css'; // Usaremos el mismo CSS

// Recibe un objeto "sorteo" con los datos
export default function TarjetaSorteo({ sorteo }) {
  
  // Formatea el precio como en TC-HU05-011 [cite: 60, 61]
  const formatoPrecio = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  });

  return (
    // Usamos el data-testid del TC-HU05-001 [cite: 33]
    <div className="raffle-card" data-testid="raffle-card">
      <img 
        src={sorteo.image_url} 
        alt={sorteo.name} 
        className="raffle-image" 
      />
      <div className="raffle-info">
        <h3 className="raffle-name">{sorteo.name}</h3>
        <p className="raffle-price">
          {formatoPrecio.format(sorteo.price_per_number)}
        </p>
      </div>
    </div>
  );
}