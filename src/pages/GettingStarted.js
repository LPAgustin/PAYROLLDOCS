import React from 'react';

function GettingStarted() {
  return (
    <div>
      <h2>Primeros Pasos</h2>
      <p>¡Comienza a usar Whapy Pay en solo 4 sencillos pasos!</p>
      <ol>
        <li>
          <strong>Regístrate:</strong> Crea tu cuenta en Whapy Pay desde nuestro panel de administración.
        </li>
        <li>
          <strong>Configura tu Negocio:</strong> Completa la configuración inicial agregando la información de tu negocio
          y elige las criptomonedas que deseas aceptar.
        </li>
        <li>
          <strong>Obtén tus Credenciales API:</strong> Accede a las claves de API necesarias para integrar Whapy Pay con
          tu sistema.
        </li>
        <li>
          <strong>Prueba en Entorno Sandbox:</strong> Antes de ir a producción, realiza pruebas utilizando nuestro
          entorno de pruebas seguro.
        </li>
      </ol>
      <h3>Recomendaciones Iniciales</h3>
      <ul>
        <li>Consulta nuestras guías para integrar la API en tu sistema.</li>
        <li>Utiliza las pruebas en Sandbox para validar transacciones.</li>
      </ul>
    </div>
  );
}

export default GettingStarted;
