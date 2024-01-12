import CardCandidato from './components/CardCandidato';

function App() {
  return (
    <div className="container min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-black text-center my-5">
        Listado de candidatos
      </h1>

      <CardCandidato />
      <CardCandidato />
    </div>
  );
}

export default App;
