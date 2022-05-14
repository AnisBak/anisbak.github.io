const express = require('express');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const app = express();

const oneDay = 1000 * 60 * 60 * 24;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(session({
    secret: "thisismysecrctekey",
    saveUninitialized: false,
    cookie: {
        maxAge: oneDay},
    resave: false

}));

app.set('view engine', 'pug');
const questions = [
    "3, 1, 4, 1, 5",
    "1, 1, 2, 3, 5",
    "1, 4, 9, 16, 25",
    "2, 3, 5, 7, 11",
    "1, 2, 4, 8, 19"
];
const answers = [
    9,
    8,
    36,
    13,
    32
]
app.get('/', (req, res) => {
    
    if (!req.session.userid)
        req.session.userid = 1;
    else
        req.session.userid += 1;

    if (!req.session.score)
        req.session.score = 0;

    if (!req.session.quizNumber)
        req.session.quizNumber = 1;
    console.log(req.sessionID);

    res.render('index.pug', { url:'/2',score: req.session.score, question: questions[0] });
  
});

app.post('/2', (req, res) => {

    if (req.body.answer == answers[0])
        req.session.score++;
    req.session.quizNumber++;
    console.log(req.session);
    res.render('index.pug', { url:'/3' ,score: req.session.score, question: questions[1] });
});
app.post('/3', (req, res) => {

    if (req.body.answer == answers[1])
        req.session.score++;
    req.session.quizNumber++;
    console.log(req.session);
    res.render('index.pug', { url:'/4', score: req.session.score, question: questions[2] });
});
app.post('/4', (req, res) => {
    if (req.body.answer == answers[2])
        req.session.score++;
    req.session.quizNumber++;
    res.render('index.pug', { url:'/5', score: req.session.score, question: questions[3] });
});
app.post('/5', (req, res) => {
    if (req.body.answer == answers[3])
        req.session.score++;
    req.session.quizNumber++;
    console.log(req.session);
    res.render('index.pug', { url:'/6',score: req.session.score, question: questions[4] });
});

app.post('/6', (req, res) => {
    if (req.body.answer == answers[4])
        req.session.score++;
    console.log(req.session);
    res.render('index2.pug', { score: req.session.score});
});
// start the server
app.listen(4000,
    () => console.log(`Server Running at port 4000`));
