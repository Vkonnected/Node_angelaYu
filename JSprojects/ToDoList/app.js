const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {application} = require('express');
const PORT = 3000 || process.env.PORT;
const date = require(__dirname + '/date.js');

const itemList = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    const day = date.getDate();
    res.render('list', {
        kindOfDay: day, 
        addedItem : itemList
    });
})


app.post('/', function (req, res) {
    
    itemList.push(req.body.listItem);
    console.log(itemList)
    res.redirect('/'); 
})

app.listen(PORT, function () {
    console.log(`listening at ${PORT}`);
})