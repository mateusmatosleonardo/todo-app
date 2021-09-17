const express = require('express');
const path = require('path');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

let tasks = ['estudar estrutura de dados', 'arrumar o quarto']

app.post('/', (req, res)=>{
    console.log(req.body.task)
})

app.get('/', (req, res)=>{
    
    res.render('index', {tasksList:tasks})

})

app.get('/del/:id', (req, res)=>{
    tasks = tasks.filter((val, index)=>{
        if(index != req.params.id){
            return val
        }
    })
    res.render('index', {tasksList:tasks})
})

app.listen(8080, ()=>{
    console.log('server no ar')
})