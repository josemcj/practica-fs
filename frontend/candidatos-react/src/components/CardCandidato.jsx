import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
  }
`;

function CardCandidato({ openModal }) {
  return (
    <CardContainer className="bg-white p-6 border mb-5">
      <div>
        <h3 className="font-black text-xl md:text-3xl col-span-3 self-baseline md:self-center mb-3">
          José Pérez
        </h3>
        <p>Fecha de entrevista: 12 Oct 2022</p>
      </div>

      <div className="flex justify-end my-auto">
        <button
          className="p-4 border border-gray-300 bg-gray-100 hover:bg-gray-300 transition-all rounded"
          onClick={() => openModal()}
        >
          Ver detalles
        </button>
      </div>
    </CardContainer>
  );
}

export default CardCandidato;
