import { useEffect, useState } from 'react';

export default function Postulantes() {
  const [postulantes, setPostulantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos los datos de postulantes para ver cómo se ve la interfaz
    const mockData = [
      { id: 1, nombre: 'Juan Pérez', estado: 'Aprobado', instructor: 'Luis García' },
      { id: 2, nombre: 'Ana Torres', estado: 'Pendiente', instructor: 'María López' },
    ];
    
    // Actualizamos el estado con los datos simulados
    setPostulantes(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Cargando postulantes...</p>;
  }

  if (!loading && postulantes.length === 0) {
    return <p>No hay postulantes disponibles.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Postulantes</h1>
      <ul className="space-y-4">
        {postulantes.map((postulante) => (
          <li key={postulante.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">{postulante.nombre}</h2>
            <p>Estado: {postulante.estado}</p>
            <p>Instructor: {postulante.instructor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
