const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database')


router.get('/NutriNET/Clientes', (req, res) => {
    mysqlConnection.query("SELECT * FROM cliente", (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

router.get('/NutriNET/getClienteById/:id', (req, res) => {
    const {id} = req.params;

    mysqlConnection.query("SELECT * FROM cliente WHERE Id = ?", [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
            
        }
    })
})

router.post('/NutriNET/Cliente', (req, res) => {
    const {Id, Nombre_Usuario, Contrasena, Nombre, Apellidos, Correo_Electronico, Edad, Estatura, Peso, IMC, GEB, ETA, Fecha_Creacion, Fecha_Actualizacion} = req.body;

    var query = 'CALL PG_IN_UP_CLIENTE(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [Id, Nombre_Usuario, Contrasena, Nombre, Apellidos, Correo_Electronico, Edad, Estatura, Peso, IMC, GEB, ETA, Fecha_Creacion, Fecha_Actualizacion], (err, rows, fields) => {
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})

router.put('/NutriNET/Cliente/:id', (req, res) => {
    const {Nombre_Usuario, Contrasena, Nombre, Apellidos, Correo_Electronico, Edad, Estatura, Peso, IMC, GEB, ETA, Fecha_Creacion, Fecha_Actualizacion} = req.body; 
    const {id} = req.params;
    var query = 'CALL PG_IN_UP_CLIENTE(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [id, Nombre_Usuario, Contrasena, Nombre, Apellidos, Correo_Electronico, Edad, Estatura, Peso, IMC, GEB, ETA, Fecha_Creacion, Fecha_Actualizacion], (err, rows, fields) => {
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})

router.delete('/NutriNET/deleteCliente/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query("DELETE FROM cliente WHERE Id = ?", [id], (err, rows, fields) =>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})

module.exports = router;

