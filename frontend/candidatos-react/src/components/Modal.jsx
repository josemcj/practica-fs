import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { formatearFecha } from '../helpers';
import { useEffect, useState } from 'react';

const URL_API =
  'https://us-central1-practica-web-full-stack.cloudfunctions.net/app/api';

function Modal({ animarModal, closeModal, candidato, setDocActualizado }) {
  const { id, nombre, fecha_entrevista, habilidades } = candidato;
  const urlApiEditar = `${URL_API}/candidato/${id}/editar`;

  // Con esto sabemos si se modificaron las habilidades
  const [habilidadesModificadas, setHabilidadesModificadas] = useState(false);

  // Arreglo con las nuevas habilidades
  const [habilidadesModificadasArr, setHabilidadesModificadasArr] =
    useState(habilidades);

  /**
   * Elimina una habilidad del arreglo.
   * @param {string} habilidad Habilidad a eliminar.
   */
  const handleEliminarHabilidad = (habilidad) => {
    const nuevasHabilidades = habilidadesModificadasArr.filter(
      (habilidadArr) => habilidadArr !== habilidad
    );
    setHabilidadesModificadasArr(nuevasHabilidades);
  };

  useEffect(() => {
    if (habilidadesModificadasArr === habilidades) {
      setHabilidadesModificadas(false);
    } else {
      setHabilidadesModificadas(true);
    }
  }, [habilidadesModificadasArr, habilidades]);

  /**
   * Manda la solicitud a la API para guardar cambios.
   */
  const handleGuardarCambios = async () => {
    // Verificar que existan habilidades
    if (habilidadesModificadasArr.length === 0) {
      alert('Añade al menos una habilidad');
      return;
    }

    const infoActualizada = {
      nombre,
      habilidades: habilidadesModificadasArr,
      fecha_entrevista,
    };
    try {
      const response = await fetch(urlApiEditar, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(infoActualizada),
      });

      if (!response.ok) throw new Error('Ha ocurrido un error');

      const responseData = await response.json();
      setDocActualizado(true);
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`h-screen bg-white fixed top-0 bottom-0 left-0 right-0 px-4 py-8 flex flex-col items-center transition-all ease-in-out duration-300 ${
        animarModal ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Icono para cerrar el modal */}
      <FontAwesomeIcon
        icon={faXmark}
        style={{ color: '#0f172a' }}
        className="p-2 h-5 w-5 md:h-6 md:w-6 bg-slate-100 hover:bg-slate-200 transition-all rounded-full cursor-pointer fixed top-5 right-5 md:top-10 md:right-10"
        onClick={() => closeModal()}
      />

      {/* Cuerpo del modal */}
      <div className="w-full md:max-w-xl mt-12">
        <h1 className="font-black text-3xl sm:text-5xl text-center mb-12">
          Información del candidato
        </h1>

        {/* Nombre y fecha de entrevista */}
        <div className="flex gap-8 mb-8">
          <div>
            <h3 className="font-bold text-2xl mb-3">Nombre</h3>
            <p>{nombre}</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-3">Fecha de entrevista</h3>
            <p>
              {fecha_entrevista
                ? formatearFecha(fecha_entrevista, 'long')
                : 'Cargando...'}
            </p>
          </div>
        </div>

        <h3 className="font-bold text-2xl mb-3">Habilidades</h3>

        {/* {habilidadesModificadasArr.length ?
            <ul className="list-disc list-inside">
                {habilidadesModificadasArr.map((habilidad, index) => (
                  <div className="flex justify-between" key={index}>
                    <li className="my-auto">{habilidad}</li>
                    <button onClick={() => handleEliminarHabilidad(habilidad)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: '#fff' }}
                        className="my-auto p-2 h-3 w-3 md:h-5 md:w-5 transition-all rounded-lg cursor-pointer bg-red-500 hover:bg-red-400"
                      />
                    </button>
                  </div>
                )}
            </ul>:(
              <p className='mt-4'>No se han agregado habilidades aún</p>
            )} */}

        {habilidadesModificadasArr.length ? (
          <ul className="list-disc list-inside">
            {habilidadesModificadasArr.map((habilidad, index) => (
              <div className="flex justify-between" key={index}>
                <li className="my-auto">{habilidad}</li>
                <button onClick={() => handleEliminarHabilidad(habilidad)}>
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: '#fff' }}
                    className="my-auto p-2 h-3 w-3 md:h-5 md:w-5 transition-all rounded-lg cursor-pointer bg-red-500 hover:bg-red-400"
                  />
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500">No se han registrado habilidades</p>
        )}

        {habilidadesModificadas && (
          <button
            className="bg-slate-900 hover:bg-slate-800 text-white w-full rounded mt-8 p-2 transition-all"
            onClick={() => handleGuardarCambios()}
          >
            Guardar cambios
          </button>
        )}
      </div>
    </div>
  );
}

export default Modal;
