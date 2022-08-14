const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
app.use(cors()) // cors 사용

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name === 'dog') {
        res.json({'sound': '멍멍'})
    } else if (name === 'cat') {
        res.json({'sound': '야옹'})
    } else {
        res.status(404).json({'message': 'Not found'})
    }    
} )

app.listen(port, () => { console.log(`Example app listening on port ${port}!`) })