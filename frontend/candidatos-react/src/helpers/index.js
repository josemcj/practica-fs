/**
 * Formatea una fecha `timestamp` de Firestore a un string que el usuario puede entender.
 * @param {object} timestampObject              Fecha en `timestamp` de Firestore.
 * @param {number} timestampObject._seconds     Segundos.
 * @param {number} timestampObject._nanoseconds Nanoeegundos.
 * @param {'long'} monthStyle                   Estilo del mes: fecha corta o completa.
 *                                              Si no se envía nada, por defecto es `short`.
 * @returns String de la fecha con el formato: '17 oct 2023'.
 *
 * @example
 * formatearFecha(timestampObject) // 17 oct 2023
 * formatearFecha(timestampObject, 'long') // 17 de octubre de 2023
 */
export const formatearFecha = (timestampObject, monthStyle = 'short') => {
  const { _seconds, _nanoseconds } = timestampObject;
  const fechaMs = new Date(_seconds * 1000 + _nanoseconds / 1e6);

  const fecha = new Date(fechaMs);
  return fecha.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: monthStyle,
    day: 'numeric',
  });
};
