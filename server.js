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
            -Dont worry about turning on/off your lights, we do it for u. <hr>
            2.Automatic Cooling system <br>
            -Dont worry about turning on your ac or fan, we are always a helping hand. <hr>
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
           2.Saurabh sawant <hr> <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/12418072_1053896784684225_1384113354466222094_n.jpg?oh=882c0ce36109c4cd02fcb691c7f927fb&oe=5A33D4E1" class="img-medium"/> <br>
           3.Soham khawte <hr> <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/12308445_940097302743837_5145793345207278043_n.jpg?oh=2d2fec30d9b813a713119c74ddf6bcc0&oe=5A1D25B8" class="img-medium"/> <br>
           4.Aswet <hr> <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/13319940_890314931097991_714430102709837774_n.jpg?oh=5e9aae7500920e77e9ccff714d6b3ef9&oe=5A29B01D" class="img-medium"/> <br>
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
