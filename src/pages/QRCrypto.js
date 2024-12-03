import React from 'react';

function QRCrypto() {
  return (
    <div>
      <h2>Generar QR Crypto</h2>
      <p>
        Genera códigos QR únicos para que tus clientes puedan realizar pagos en criptomonedas desde sus billeteras
        directamente en tu tienda física.
      </p>
      <ol>
        <li>Accede al panel de administración de Whapy Pay.</li>
        <li>Selecciona la opción "Generar QR".</li>
        <li>Introduce los detalles del pago (monto, moneda, etc.).</li>
        <li>Descarga e imprime el QR generado.</li>
      </ol>
      <p>
        Integra esta funcionalidad con nuestra API para automatizar la generación de QR. Consulta más en 
        whapypay/docs/qr.
      </p>
    </div>
  );
}

export default QRCrypto;
