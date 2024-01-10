import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('salam')
})

app.get('/toffee', (req, res)=>{
    res.send('mil gyi')
})

app.listen(8000, ()=>{
    console.log('salaaam')
})