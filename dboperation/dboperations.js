
const assert = require('assert');

exports.insert_doc = function(db, callback){
	console.log("inserting temp data");
	const name = db.collection('mydocuments');
	name.insertMany(
		[	
			{a:11},
			{b:22},
			{c:33}
		],
		function (err, result) {
			console.log("Data inserted");
			callback(result);
		}
	)
}

exports.get_docs = function (db, callback) {
	const name = db.collection('mydocuments');
	var cursor = name.find().toArray(
		function(err, results){
			callback(JSON.stringify(results));
		}
	);
}

exports.find_doc = function (db, value, callback) {
	console.log("a:"+ value)
	const cname = db.collection('mydocuments');
	var cursor = cname.find({'a': value}).toArray(
			function(err, doc ){
				console.log("find doc "+ doc );
				callback(doc);
			}
		)
}

exports.update_doc = function (db, value, callback) {
	const cname = db.collection('mydocuments');
	console.log("value a : value");
	var cursor = cname.updateOne(
			{'a':value},
			 {$set: {b : value * 2, c: value * 4}},
			function(err, doc ){
				console.log("updated a:11 doc:" + doc );
				callback(doc);
			}
		)	
}

exports.update_many = function (db, valuea, value, callback) {
	const cname = db.collection('mydocuments');
	console.log("value a : valuea");
	console.log("valu of B C: value");
	var cursor = cname.updateMany(
			{'a':valuea},
			{$set: {a: value, b : value * 2, c: value * 4}},
			function(err, doc ){
				callback(doc);
			}
		)	
}
exports.remove_doc = function(db, callback){
	const cname = db.collection('mydocuments');
	var cursor = cname.deleteOne(
		{a:11},
		function (err, results) {
			callback(results);
		}
	)
}

exports.deleteCollection = function (db, collectionName,  callback) {
	const cname = db.collection(collectionName);
	cname.drop(
		function (err, result) {
			if (err) {
				console.log("Can't deleteCollection.");
			}
			if (result) {
				console.log("collection collectionName deleted...");
				callback(result);
			}

		}
	)
}