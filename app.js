const express = require('express');
const app = express();


app.listen(3000, ()=> console.log("servidor andando"));

// Setear el Template engine
//
app.set('view engine', 'ejs'); // el segundo parametro es el nombre del motor de plantillas
//app.set('views', '/views'); // Define la ruta de la carpeta "views"
// Para cambiar el template engine
//app.set('views','misVistas');
app.set('views', './views');

let frutas = ['manzana', 'pera', 'naranja'];

app.get('/', (req, res)=> {
    // El segundo parámetro es la data a compartir a la vista, todo lo que quieras mandarle a la vista
    res.render('index', {
        paraComer: frutas,
        textoLoco: 'tengo partido de futbol'
    } );
});

//Parametrizo mi ruta
app.get('/frutas/:id', (req, res) => {
    // las 2 lineas de abajo estan al dope, puedo pasar req.params.id directo a unaFruta
   /* let elId = req.params.id;
    let frutaEncontrada = frutas[elId];
    res.render('detalle', {
        unaFruta: frutaEncontrada
    })*/

    res.render('detalle', {
        unaFruta: frutas[req.params.id]
    })

})