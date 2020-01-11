const express = require('express');
const router = express.Router();
const empresa = require('../controllers/EmpresaController');

router.get('/pessoas',(req,res)=>{
    empresa.get(req,res);  
})
router.post('/pessoa',(req,res)=>{
    empresa.post(req,res);
})
router.delete('/pessoa/:id',(req,res)=>{
    empresa.delete(req,res);
})
module.exports = router;