// console.log("first console line commet");

// const express = require('express');

// const bodyParser = require('body-parser');

// const app = express();
// const dboperation = require("./dboperation/dboperations");
// const MongoClient = require('mongodb').MongoClient;
// app.use(bodyParser.urlencoded({useUnifiedTopology: true}));

// /// database name
// const dbName = 'mydb';
// var db;


// //connection url to localhost
// const client = new MongoClient('mongodb://localhost:27017');

// //connettiong to dabasase
// client.connect(function(err) {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	console.log('connected');
// 	app.listen(3000,
// 		function () {
// 				db = client.db(dbName);
// 		}
// 	);
// });

// app.get('/getDocs', (request, response) => {
// 	console.log("getting gettemp request");	
// 	dboperation.get_docs(db,  function (data) {
// 			console.log("get: "+ data);
// 			response.send(data);
// 		}
// 	);
// });

// app.get('/', (request, response) => {
// 		response.send("well come...");
// });

// app.get('/insertTemp', (request, response) => {
// 	console.log("getting insertTemp request");	
// 	dboperation.insert_doc(db,  function (data) {
// 			console.log("data: "+ data);
// 			response.send("data inserted");
// 		}
// 	);
// });
// app.get("/find_doc?:a", (request, response) => {

// 	var a = parseInt(request.query.a);
// 	console.log("a: "+ a);
// 	dboperation.find_doc(db, a, function (doc) {
// 		response.send(JSON.stringify(doc));
// 	})
// });

// app.post("/update_doc?:a", (request, response) => {
// 	var a = parseInt(request.query.a);
// 	console.log("a: "+ a);
	
// 	dboperation.update_doc(db, a, function (doc) {
// 		response.send(JSON.stringify(doc));
// 	})
// });
// app.post("/update_docs?:a&:value", (request, response) => {
// 	console.log("getting update docs request");	
// 	var a = parseInt(request.query.a);
// 	var value = parseInt(request.query.value);
// 	dboperation.update_many(db, a, value, function (doc) {
// 		response.send(JSON.stringify(doc));
// 	})
// });

// app.get("/delete_doc", (request, response) => {
// 	dboperation.remove_doc(db, function (doc) {
// 		response.send(JSON.stringify(doc));	
// 	})
// });

// app.use(function(req, res){
// 	res.status(404).sendFile({url: req.originalUrl + " not found..."})
// })