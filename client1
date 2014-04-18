var memcache = require('memcache');
var settings = {port:11211, host:'127.0.0.1'};

var client = new memcache.Client(settings.port, settings.host);//memcache 客户端

client.on('connect', function(){
	client.connected = true;
	console.log("onConnected");
});

client.on('close', function(){
	client.connected = false;
	console.log("onClosed");
});

function getData(key){
	client.get(key, function(err, result){
		if(err) console.log("get error");
		console.log("result is " + result);
	});
}

// console.log(getData("hello"));//由于node是异步io的，故在getData中注册了取缓存完成的回调函数后，并没有等取完缓存，而是直接返回 故此处打印出来的是空值。

function addData(key, value){
	client.add(key, value, function(err){
		if(err){
			console.log("add error");
			return;
		}
		console.log("add success");
	});
}

function deleteData(key){
	client.delete(key, function(err){
		if(err){
			console.log("delete error");
			return;
		}
		console.log("deleted");
	});
}

exports.client = client;
exports.getData = getData;
exports.addData = addData;
exports.deleteData = deleteData;
