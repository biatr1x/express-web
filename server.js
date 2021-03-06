const express = require('express');
const app = express();

const hbs = require ('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partiales');
app.set('view engine', 'hbs');

app.get('/',  (req, res)=> {
    res.render('home', {
        nombre: 'Beatriz',
        anio: new Date().getFullYear()
    });
});

app.get('/about',  (req, res)=> {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});
  

app.listen(port,()=>{
console.log(`Escuchando peticion en el puerto ${port}`);
});
