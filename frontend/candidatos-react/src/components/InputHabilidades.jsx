import { useState } from 'react';

function InputHabilidades({
  habilidadesModificadasArr,
  setHabilidadesModificadasArr,
}) {
  const [habilidad, setHabilidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habilidad) {
      alert('Agrega una habilidad');
    }

    setHabilidadesModificadasArr([...habilidadesModificadasArr, habilidad]);
    setHabilidad('');
  };

  return (
    <div className="my-4">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="habilidad"
          id="habilidad"
          value={habilidad}
          onChange={(e) => setHabilidad(e.target.value)}
          placeholder="Añade una habilidad y da clic en Enter"
          className="p-2 rounded-md border border-slate-300 focus:outline-0 focus:border-slate-600 transition-all w-full"
        />

        <input
          type="submit"
          className="bg-slate-900 text-white p-2 rounded hover:bg-slate-800 cursor-pointer transition-all w-1/5"
          value="Añadir"
        />
      </form>
    </div>
  );
}

export default InputHabilidades;
