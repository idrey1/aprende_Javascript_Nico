const express = require('express');
const user = require('./user.controller');
const User = require('./user.controller');
const app = express();
const port = 3000;

app.get('/', User.list);
app.post('/', User.create);
app.get('/:id', User.get);
app.put('/:id', User.update);
app.patch('/:id', User.update);
app.delete('/:id', User.destroy);

app.get('*',(req,res)=>{
    res.status(404).send('Esta página no existe!!!');
});

app.post('*',(req,res)=>{
    res.status(404).send('Esta página no existe!!!');
});

app.listen(port,()=>{
    console.log('Arrancando la aplicación');
});

