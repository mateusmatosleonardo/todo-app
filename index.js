const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Carregado')
})

app.listen(8080, ()=>{
    console.log('server no ar')
})