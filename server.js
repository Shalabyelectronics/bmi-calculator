const express = require('express');
const bodyParse = require('body-parser');
const port = 3000

app = express();
app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static('files'))


app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.post('/',(req,res)=>{
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmiResult = (weight/(height**2)).toFixed(2);

    res.send(`The BMI Result is ${bmiResult}`);
})

app.listen(port,()=>{
    console.log(`Server Runing on port ${port}`)
})
