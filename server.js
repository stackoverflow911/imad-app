var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var page1 = {
    title: 'page1 |ruman',
    heading: 'features',
    date: '24 aug',
    content: `
        <p>
            1.Automatic light control system </hr>
            -Dont worry about turning on/off your light we do it for u. </hr>
            -
            
            
        </p>
        <p>
            para2 djfvjnfdnvjfj
        </p>`
    
};
var page2 = {
    title: 'page2 |ruman',
    heading: 'page2',
    date: '24 aug',
    content: `
        <p>
            content of page 2
        </p>
        <p>
            para2 djfvjnfdnvjfj
        </p>`
    
};
var page3 = {
    title: 'page3 |ruman',
    heading: 'page3',
    date: '24 aug',
    content: `
        <p>
           content of page 3
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
                ${date}
                </div>   
                <div>
                ${content}
                </div>
            
            </div>
            
        </body>
    </html>
    `;
return htmltemplate;
}    


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/one', function (req, res) {
  res.send(createtemplate(page1));
});

app.get('/two', function (req, res) {
  res.send(createtemplate(page2));
});

app.get('/three', function (req, res) {
  res.send(createtemplate(page3));
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
