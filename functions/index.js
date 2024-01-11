const express = require('express');
const app = express();

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions/v1');
// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

/**
 * Cloud Firestore configuration.
 */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://practica-web-full-stack-default-rtdb.firebaseio.com"
});
const db = admin.firestore();

app.get('/', (req, res) => {
    res.json({ msg: 'It works!' })
})

app.get('/candidatos', async (req, res) => {
  try {
    const result = await db.collection('candidatos').get()

    const data = result.docs.map(doc => {
      const { nombre, habilidades } = doc.data()

      return {
        id: doc.id,
        nombre, habilidades
      }
    })

    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

app.get('/candidato/:id', async (req, res) => {
  const { id } = req.params

  try {
    const docRef = db.collection('candidatos').doc(id);
    const doc = await docRef.get()
    
    if( !doc.exists ) {
      res.status(404).json({ message: 'Este candidato no existe' })
    }

    res.status(200).json({ data: doc.data() })
  } catch (error) {
    res.status(500).json({ message: 'Error: ' + error })
  }
})

app.post('/add', async (req, res) => {
  try {
    const result = await db.collection('candidatos').add({
      nombre: 'Otro name',
      habilidades: [
        'Java', 'Spring Boot'
      ]
    })

    res.status(201).json({
      message: `Registro guardado con el ID: ${result.id}`
    })
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
});

exports.app = functions.https.onRequest(app);