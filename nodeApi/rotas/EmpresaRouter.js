const express = require('express');
const router = express.Router();
const empresa = require('../controllers/EmpresaController');

router.get('/pessoas',(req,res)=>{
    empresa.get(req,res);  
})
router.post('/pessoa',(req,res)=>{
    empresa.post(req,res);
})
module.exports = router;