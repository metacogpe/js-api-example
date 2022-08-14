const express = require('express')
const app = express()

app.get('/user/:id', (req, res) => {
    // const p = req.params;
    // console.log(p)

    // 입력 :  http://localhost:3000/user/1?name=joco&age=20
    // 결과 : { name: 'joco', age: '20' }
    const q = req.query;
    console.log(q)
    res.send({'msessage': 'Hello World'});
} )

port = 3000
app.listen(port, () => { console.log(`Example app listening on port ${port}!`) })