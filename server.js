const express = require('express');
const bodyParse = require('body-parser');
const port = 3000

app = express();
app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static('files'))


app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.listen(port,()=>{
    console.log(`Server Runing on port ${port}`)
})
