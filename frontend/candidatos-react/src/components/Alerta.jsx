import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function Alerta({ mensaje }) {
  return (
    <div className="bg-red-50 border border-red-600 p-2 my-7 rounded flex justify-center items-center w-full">
      <FontAwesomeIcon
        icon={faCircleExclamation}
        style={{ color: '#DC2626' }}
        className="mr-2"
      />
      <p className="text-red-600 text-center">{mensaje}</p>
    </div>
  );
}

export default Alerta;
