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
            1.Automatic light control system <br>
            -Dont worry about turning on/off your light we do it for u. <hr>
            2.Automatic Cooling system <br>
            -Dont worry about turning on your ac or fan we are always happy to help. <hr>
            <br> <br>
            More features coming soon....
            
            
            
        </p>
        <p>
            
        </p>`
    
};
var page2 = {
    title: 'page2 |ruman',
    heading: 'Price',
    date: '24 aug',
    content: `
        <p>
            Its Only does EVERYTHING at Just Rs 1200.
        </p>
        <p>
            
        </p>`
    
};
var page3 = {
    title: 'page3 |ruman',
    heading: 'Founders',
    date: '24 aug',
    content: `
        <p>
           1.Ruman Mulla <hr>
           2.Saurabh sawant <hr> <img src="/ui/madi.png" class="img-medium"/> <br>
           3.Soham khawte <hr> <img src="/ui/soham.jpg" class="img-medium"/> <br>
           4.Aswet <hr> <img src="/ui/aswet.jpg" class="img-medium"/> <br>
        </p>
        <p>
            
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
