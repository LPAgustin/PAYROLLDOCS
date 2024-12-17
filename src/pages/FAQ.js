import React from 'react';

function FAQ() {
  return (
    <div>
      <h2>Preguntas Frecuentes</h2>
      <p>
        Aquí respondemos las preguntas más comunes relacionadas con la implementación y funcionamiento de **Whapy Pay**.
      </p>

      <h3>¿Qué criptomonedas acepta Whapy Pay?</h3>
      <p>
        Actualmente, Whapy Pay acepta las siguientes criptomonedas en las redes **TRON** y **Binance Smart Chain (BSC)**:
      </p>
      <ul>
        <li>USDT (Tether)</li>
        <li>TRX (TRON)</li>
        <li>BUSD (Binance USD)</li>
        <li>BNB (Binance Coin)</li>
      </ul>

      <h3>¿Cómo obtengo mis credenciales de API?</h3>
      <p>
        Para obtener tus credenciales, debes registrarte en el panel de administración de Whapy Pay y dirigirte a la
        sección **Configuración de API**. Allí podrás generar tu **token de autenticación** y tus claves privadas.
      </p>

      <h3>¿Cómo pruebo la integración antes de producción?</h3>
      <p>
        Utiliza nuestro **Entorno Sandbox** para realizar pruebas sin riesgos. Asegúrate de configurar tus credenciales
        de pruebas antes de comenzar.
      </p>

      <h3>¿Qué debo hacer si recibo un error 401 Unauthorized?</h3>
      <p>
        Este error ocurre cuando las credenciales de autenticación no son válidas o están ausentes. Verifica lo
        siguiente:
      </p>
      <ul>
        <li>El token de autenticación es correcto y no está expirado.</li>
        <li>La clave privada coincide con la billetera configurada.</li>
      </ul>
    </div>
  );
}

export default FAQ;
