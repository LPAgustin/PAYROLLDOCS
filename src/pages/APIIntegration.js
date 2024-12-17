import React from 'react';

function APIIntegration() {
  return (
    <div>
      <h2>Integración API</h2>
      <p>
        La API de Whapy Pay te proporciona las herramientas necesarias para aceptar, gestionar y automatizar pagos con
        criptomonedas.
      </p>

      <h3>Pasos para Integrar la API</h3>
      <ol>
        <li>Obtén tus credenciales API desde tu panel de administración.</li>
        <li>
          Configura los endpoints disponibles:
          <ul>
            <li>
              <strong>Verificación de Saldo:</strong> Consulta el balance de una billetera.
            </li>
            <li>
              <strong>Historial de Transacciones:</strong> Obtén una lista de las transacciones realizadas.
            </li>
            <li>
              <strong>Generación de QR:</strong> Crea códigos QR únicos para pagos.
            </li>
          </ul>
        </li>
        <li>Prueba las solicitudes usando herramientas como Postman o cURL.</li>
      </ol>

      <h3>Ejemplo de Solicitud</h3>
      <pre>
        {`
GET /api/wallets/balance
Headers:
  Authorization: Bearer {token}

Response:

  {
    "balance": 5000,
    "currency": "USDT",
    "network": "TRON"
  }
        `}
      </pre>

      <h3>Errores Comunes</h3>
      <ul>
        <li><strong>401 Unauthorized:</strong> Verifica tus credenciales de API.</li>
        <li><strong>404 Not Found:</strong> El endpoint solicitado no existe.</li>
      </ul>
    </div>
  );
}

export default APIIntegration;
