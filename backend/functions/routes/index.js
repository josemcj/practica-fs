const express = require('express');
const router = express.Router();

const {
  getCandidatos,
  getCandidatoById,
  addCandidato,
  editCandidato,
} = require('../controllers');

router.get('/candidatos', getCandidatos);
router.get('/candidato/:id', getCandidatoById);

router.post('/candidatos/crear', addCandidato);

router.put('/candidato/:id/editar', editCandidato);

module.exports = router;
