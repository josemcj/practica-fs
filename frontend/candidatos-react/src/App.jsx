import { useState, useEffect } from 'react';
import CardCandidato from './components/CardCandidato';
import Modal from './components/Modal';
import SpinnerLoading from './components/SpinnerLoading';

const URL_API_CANDIDATOS =
  'https://us-central1-practica-web-full-stack.cloudfunctions.net/app/api/candidatos';

function App() {
  /**
   * Indica si el modal está abierto o cerrado.
   * `false`: Modal cerrado.
   * `true`: Modal abierto.
   */
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Ayuda a agregar animación.
  const [animarModal, setAnimarModal] = useState(false);
  const [candidatosList, setCandidatosList] = useState([]);
  const [candidatoSelected, setCandidatoSelected] = useState({});
  const [docActualizado, setDocActualizado] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Abre el modal y añade animación de apertura.
   */
  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 0);
  };

  /**
   * Cierra el modal y añade animación de cierre.
   */
  const closeModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  /**
   * Consulta a la API.
   */
  useEffect(() => {
    const getCandidatos = async () => {
      setIsLoading(true);
      const respuesta = await fetch(URL_API_CANDIDATOS);
      const resultado = await respuesta.json();

      setCandidatosList(resultado.data);
      setIsLoading(false);
    };

    getCandidatos();
    setDocActualizado(false);
  }, [docActualizado]);

  return (
    <div className="container min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-black text-center my-5 mb-10">
        Listado de candidatos
      </h1>

      {isModalOpen && (
        <Modal
          animarModal={animarModal}
          closeModal={closeModal}
          candidato={candidatoSelected}
          setDocActualizado={setDocActualizado}
        />
      )}

      {isLoading ? (
        <SpinnerLoading />
      ) : (
        candidatosList.map((candidato) => (
          <CardCandidato
            key={candidato.id}
            openModal={openModal}
            candidato={candidato}
            setCandidatoSelected={setCandidatoSelected}
          />
        ))
      )}

      {/* {candidatosList.map((candidato) => (
        <CardCandidato
          key={candidato.id}
          openModal={openModal}
          candidato={candidato}
          setCandidatoSelected={setCandidatoSelected}
        />
      ))} */}
    </div>
  );
}

export default App;
