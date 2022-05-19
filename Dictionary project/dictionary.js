const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const wordModule = require('./word');
const app = express();

app.use(bodyParser.urlencoded());
app.use(session({
    secret: 'secret'
}
))
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'dict.html'));
});

app.post('/app', (req, res) => {
   
    if (!req.session.word)
        req.session.word = {};
    req.session.word = req.body.word;
    res.redirect('/app');
})

app.get('/app', (req, res) => {
    wordModule.wordDesciption(req.session.word).then(data => res.send(data))
        .catch(e => console.log(e));
    
})
app.listen(3000, () => {
    console.log('Server is running on 3000');
});


