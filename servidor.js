const express =require('express');
const mongoose = require('mongoose');
const TareaSchema = require("./modelos/Tarea.js");
const app = express();
const router = express.router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexion a base de datos

mongoose.connect("mongodb+srv://YulianLeon:veridisquo1@clusterpagweb.cbnvb.mongodb.net/MONGODB?retryWrites=true&w=majority"); 

//Operaciones CRUD
router.get('/', (req, res) =>{
    res.send("El inicio de mi API");
})
router.post('/tarea',(req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    })

    nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Tarea ha sido almacenada correctamente")
    })
});
app.use(router);



app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});