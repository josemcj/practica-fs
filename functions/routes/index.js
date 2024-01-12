const express = require('express');
const router = express.Router();

const {
  getCandidatos,
  getCandidatoById,
  addCandidato,
} = require('../controllers');

router.get('/candidatos', getCandidatos);
router.get('/candidato/:id', getCandidatoById);

router.post('/candidatos/crear', addCandidato);

module.exports = router;
