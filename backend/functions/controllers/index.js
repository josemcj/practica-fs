// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

/**
 * Cloud Firestore configuration.
 */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://practica-web-full-stack-default-rtdb.firebaseio.com',
});
const db = admin.firestore();

/**
 * Lists all documents from `candidatos` collection.
 */
const getCandidatos = async (req, res) => {
  try {
    const result = await db.collection('candidatos').get();

    const data = result.docs.map((doc) => {
      const { nombre, habilidades, fecha_entrevista } = doc.data();

      return {
        id: doc.id,
        nombre,
        habilidades,
        fecha_entrevista,
      };
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

/**
 * Get a `candidato` by its ID.
 * @param {string} req.params.id ID of document.
 */
const getCandidatoById = async (req, res) => {
  const { id } = req.params;

  try {
    const docRef = db.collection('candidatos').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      res.status(404).json({ message: 'Este candidato no existe' });
    }

    res.status(200).json({ data: doc.data() });
  } catch (error) {
    res.status(500).json({ message: 'Error: ' + error });
  }
};

/**
 * Creates a new document in the database.
 *
 * @param {string} req.body.nombre     Candidate's name.
 * @param {array} req.body.habilidades Technologies that the candidate knows.
 */
const addCandidato = async (req, res) => {
  const { nombre, habilidades } = req.body;

  try {
    const result = await db.collection('candidatos').add({
      nombre,
      habilidades,
    });

    res.status(201).json({
      message: `Registro guardado con el ID: ${result.id}`,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

/**
 * Edits an existing document in the database, given by its ID.
 *
 * @param {string}  req.params.id         Candidate's ID.
 * @param {string}  req.body.nombre       Candidate's name.
 * @param {array}   req.body.habilidades  Technologies that the candidate knows.
 */
const editCandidato = async (req, res) => {
  const { id } = req.params;
  const { nombre, habilidades } = req.body;

  try {
    const candidato = db.collection('candidatos').doc(id);

    await candidato.set({ nombre, habilidades });
    res.status(200).json({
      message: 'Candidato modificado correctamente',
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getCandidatos,
  getCandidatoById,
  addCandidato,
  editCandidato,
};
