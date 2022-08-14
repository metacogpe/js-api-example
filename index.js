console.log('Hello World');
// https://www.npmjs.com/package/express
// npm install figlet   // -g 옵션으로 설치하면 전역으로 사용 가능 
var figlet = require('figlet');

figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.send('Hello dog')
})

app.get('/cat', function (req, res) {
    res.send('<h1> Hello cat </h1>')
})

app.get('/google', function (req, res) {
    res.send("<h1> <a href='https://www.google.com'> google </a> </h1>")
})

app.get('/bark', function (req, res) {
    res.send({'sound': 'woof'})
    // res.json({'sound': 'woof'})  : json으로도 가능 

})

port = 3000
app.listen(port, () => { console.log(`Example app listening on port ${port}!`) })