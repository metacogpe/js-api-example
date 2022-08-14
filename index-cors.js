console.log('Hello World');


const express = require('express')
var cors = require('cors')
const app = express()
port = 3000
app.use(cors()) // cors 사용

app.get('/', function (req, res) {
    res.send('Hello World')
})






app.listen(port, () => { console.log(`Example app listening on port ${port}!`) })