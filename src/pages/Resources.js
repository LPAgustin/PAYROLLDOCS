import React from 'react';

function Resources() {
  return (
    <div>
      <h2>Recursos Adicionales</h2>
      <p>
        Accede a documentación técnica, ejemplos de integración y guías detalladas para aprovechar al máximo **Whapy Pay**.
      </p>

      <h3>SDKs Disponibles</h3>
      <p>
        Whapy Pay proporciona SDKs para facilitar la integración en diferentes lenguajes de programación:
      </p>
      <ul>
        <li>**Node.js:** Simplifica la interacción con la API REST.</li>
        <li>**Python:** Herramientas para generar pagos y consultas.</li>
        <li>**PHP:** Librería para conectar tu backend con Whapy Pay.</li>
      </ul>

      <h3>Entorno de Pruebas</h3>
      <p>
        Utiliza el entorno **Sandbox** para validar tu implementación antes de ir a producción. Asegúrate de:
      </p>
      <ul>
        <li>Utilizar credenciales de pruebas generadas en el panel.</li>
        <li>Verificar las respuestas de los endpoints utilizando herramientas como Postman.</li>
      </ul>

      <h3>Ejemplos Prácticos</h3>
      <p>Consulta los ejemplos para una integración rápida:</p>
      <ul>
        <li>Generación de un QR con Node.js.</li>
        <li>Consulta de saldo con Python.</li>
        <li>Historial de transacciones en PHP.</li>
      </ul>

      <h3>Soporte Técnico</h3>
      <p>
        Si necesitas asistencia adicional, dirígete a la sección de **Preguntas Frecuentes** o contacta al equipo de
        soporte técnico desde tu panel de administración.
      </p>
    </div>
  );
}

export default Resources;
