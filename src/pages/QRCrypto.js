import React from 'react';

function QRCrypto() {
  return (
    <div>
      <h2>Generación de QR para Pagos</h2>
      <p>
        Whapy Pay permite generar **códigos QR** únicos para facilitar pagos con criptomonedas de manera rápida y segura.
      </p>

      <h3>¿Cómo generar un código QR?</h3>
      <ol>
        <li>Obtén tu token de autenticación desde el panel de administración.</li>
        <li>Realiza una solicitud POST a nuestro endpoint de generación de QR.</li>
        <li>Recibe la imagen del QR en respuesta, lista para ser escaneada por billeteras compatibles.</li>
      </ol>

      <h3>Ejemplo de Solicitud</h3>
      <pre>
        {`
POST /api/qr/generate
Headers:
  Authorization: Bearer {token}
Body:
  {
    "amount": 100,
    "currency": "USDT",
    "network": "TRON"
  }

Response:
  {
    "qr_code": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...",
    "payment_address": "TABC12345678..."
  }
        `}
      </pre>

      <h3>Billeteras Compatibles</h3>
      <ul>
        <li>TronLink</li>
        <li>Trust Wallet</li>
        <li>Binance Wallet</li>
      </ul>

      <h3>Consideraciones</h3>
      <ul>
        <li>El monto y la moneda deben coincidir con los parámetros configurados.</li>
        <li>Los códigos QR tienen un tiempo de expiración predeterminado.</li>
      </ul>
    </div>
  );
}

export default QRCrypto;
