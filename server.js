const express = require('express');
const app = express();
app.use( express.urlencoded({extended:true}) );
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const {NotesRouter} = require( './server/routes/notesRouter' );
const cors = require('cors');
const path = require('path'); app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(express.static(__dirname + "/static"));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
app.use( cors());
app.use(express.json());
require( './server/config/database' );

app.use('/',NotesRouter);
// app.all("*", (req,res,next) => {
// 	res.sendFile(path.resolve("./public/dist/public/index.html"))
//   });




app.listen(8080, function (){//este es el cierre

	console.log("the user server is running in port 8080");
});
