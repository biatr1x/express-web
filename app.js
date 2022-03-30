const express = require('express')
const app = express()

app.get('/',  (req, res)=> {
  //res.send('Caraota con azucar')
  let salida={
      nombre: 'Aaron',
      edad: 7,
      url:req.url
  };
  res.send (salida);
})

  

app.listen(3000,()=>{

console.log('Escuchando peticion en el puerto 3000')
})
