import { useState } from 'react';
import CardCandidato from './components/CardCandidato';
import Modal from './components/Modal';

function App() {
  /**
   * Indica si el modal está abierto o cerrado.
   * `false`: Modal cerrado.
   * `true`: Modal abierto.
   */
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Nos ayuda a agregar animación.
  const [animarModal, setAnimarModal] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 0);
  };

  const closeModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  return (
    <div className="container min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-black text-center my-5 mb-10">
        Listado de candidatos
      </h1>

      {isModalOpen && (
        <Modal animarModal={animarModal} closeModal={closeModal} />
      )}

      <CardCandidato openModal={openModal} />
    </div>
  );
}

export default App;
