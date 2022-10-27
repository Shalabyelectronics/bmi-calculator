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
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmiResult = (weight/(height**2)).toFixed(2);

    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>BMI Calculator</title>
</head>
<body>
    <h1>BMI Calculator</h1>
    <div class='form'>
        <p class='result'>The BMI Result is ${bmiResult}</p>
    </div>
    <h6><a href="http://shalaby.tech" target="_blank">www.shalaby.tech</a></h6>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="./main.js"></script>
</body>
</html>
    
    `);
})

app.listen(port,()=>{
    console.log(`Server Runing on port ${port}`)
})
