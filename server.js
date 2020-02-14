console.log("first console line commet");

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({useUnifiedTopology: true}));

const dbName = 'sample_analytics';
//mongodb+srv://kirans:<password>@cluster0-0ntoe.mongodb.net/test?retryWrites=true&w=majority

const client = new MongoClient('mongodb+srv://kirans:fidel@123@cluster0-0ntoe.mongodb.net/test?retryWrites=true&w=majority');

client.connect(function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('connected');
	const db = client.db(dbName);
	app.listen(3000,
		function () {
			console.log("listening on port 3000");;
		}
	);
});







































app.get('/', (request, response) => {
		response.sendFile("/NodeJSProject/FirstNodeJsApp/html" + '/index.html');
	}
);

app.post('/quotes', (request, response) => {
	console.log(response.body);
	
});

app.get('/quotes', (request, response) => {
	console.log("getting get request");	
	response.send("got get request");
});