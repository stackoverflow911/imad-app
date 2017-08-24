var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var page1 = {
    title: 'page1 |ruman',
    heading: 'page2',
    date: '24 aug',
    content: `
        <p>
            dhinchikasyayucyugc shit happens VVVV shit happensshit happensshit happensshit happensshit happensshit happensshit happensshit happensshit happens
            shit happensshit happensshit happensshit happensshit happensshit happensshit happens
            
            shit happensshit happensshit happensshit happens
            shit happensshit happensshit happens
            shit happensshit happensshit happens
            
            shit happen
        </p>
        <p>
            para2 djfvjnfdnvjfj
        </p>`
    
};
function createtemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

    var htmltemplate = `
    <html>
        <head>
            <title>
             ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head> 
        <body>
            <div class="container">
                <div>
                <a href='/'>Home</a>
                </div>
                   <h2> ${heading} </h2>
                <div>
                ${content}
                </div>
            
            </div>
            
        </body>
    </html>
    `

}    


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/one', function (req, res) {
  res.send(createtemplate(page1));
});

app.get('/two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'two.html'));
});

app.get('/three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ghanta', function (req, res) {
  res.send("Tera babaji ka ghanta");
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
