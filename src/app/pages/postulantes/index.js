import { useEffect, useState } from 'react';

export default function Postulantes() {
  const [postulantes, setPostulantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para hacer la llamada a la API
    async function fetchPostulantes() {
      try {
        const response = await fetch('http://localhost:4000/api/postulantes'); // URL del backend de Nest.js
        const data = await response.json();
        setPostulantes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los postulantes:', error);
        setLoading(false);
      }
    }

    fetchPostulantes();
  }, []);

  if (loading) {
    return <p>Cargando postulantes...</p>;
  }

  return (
    <div>
      <h1>Lista de Postulantes</h1>
      <ul>
        {postulantes.map((postulante) => (
          <li key={postulante.id}>
            {postulante.nombre} - {postulante.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}
