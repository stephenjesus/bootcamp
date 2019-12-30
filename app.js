var express = require('express');
var app = express();

var indexRouter =  require('./routes/index');
var usersRouter =  require('./routes/users');


console.log('checking');
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

indexRouter(app);
usersRouter(app);
console.log('checking 22');

//set view engine
app.set("view engine","jade")

app.get('/jade', function (req, res) {
    res.render('sample');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});