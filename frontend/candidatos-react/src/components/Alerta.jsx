import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function Alerta({ mensaje, error = false }) {
  const claseTw = error
    ? {
        bg: 'bg-red-50',
        iconColor: '#DC2626',
        border: 'border-red-600',
        textColor: 'text-red-600',
      }
    : {
        bg: 'bg-green-50',
        iconColor: '#16a34a',
        border: 'border-green-600',
        textColor: 'text-green-600',
      };

  return (
    <div
      className={`${claseTw.bg} ${claseTw.border} border p-2 my-7 rounded flex justify-center items-center w-full`}
    >
      <FontAwesomeIcon
        icon={faCircleExclamation}
        style={{ color: claseTw.iconColor }}
        className="mr-2"
      />
      <p className={`${claseTw.textColor} text-red-600 text-center`}>
        {mensaje}
      </p>
    </div>
  );
}

export default Alerta;
