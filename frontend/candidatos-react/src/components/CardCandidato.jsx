import styled from '@emotion/styled';
import { formatearFecha } from '../helpers';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
  }
`;

function CardCandidato({ openModal, candidato, setCandidatoSelected }) {
  const { nombre, fecha_entrevista: fechaEntrevista } = candidato;

  const handleOpenModal = () => {
    openModal();
    setCandidatoSelected(candidato);
  };

  return (
    <CardContainer className="bg-white p-6 border mb-5">
      <div>
        <h3 className="font-black text-xl md:text-3xl col-span-3 self-baseline md:self-center mb-3">
          {nombre}
        </h3>
        <p>Fecha de entrevista: {formatearFecha(fechaEntrevista)}</p>
      </div>

      <div className="flex justify-end my-auto">
        <button
          className="p-4 border border-gray-300 bg-gray-100 hover:bg-gray-300 transition-all rounded"
          onClick={() => handleOpenModal()}
        >
          Ver detalles
        </button>
      </div>
    </CardContainer>
  );
}

export default CardCandidato;
