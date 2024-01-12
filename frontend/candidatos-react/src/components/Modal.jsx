import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { formatearFecha } from '../helpers';

function Modal({ animarModal, closeModal, candidato }) {
  const { nombre, fecha_entrevista, habilidades } = candidato;

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
            <p>{formatearFecha(fecha_entrevista, 'long')}</p>
          </div>
        </div>

        <h3 className="font-bold text-2xl mb-3">Habilidades</h3>
        <ul className="list-disc list-inside">
          {habilidades.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
