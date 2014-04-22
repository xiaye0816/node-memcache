var memcache = require('memcache');
var setting = {host:'127.0.0.1', port:11211};

var client = new memcache.Client(setting.port, setting.host);

client.on('connect', function(){
	client.connected = true;
	console.log("onConnect");
});


client.on('close', function(){
	client.connected = false;
	console.log("onClosed");
});

client.on('error', function(){
	console.log("con err");
});

client.on('timeout', function(){
	console.log("socket timed out");
});

function getVersion(){
	client.version(function(err, version){
	if(err) console.log("err");
	console.log(version);
});
};

function getData(key){
	client.connect();
	client.get(key, function(err, result){
		if(err) console.log("get error");
		console.log("result is " + result);
		client.close();
	});
}

// console.log(getData("hello"));//由于node是异步io的，故在getData中注册了取缓存完成的回调函数后，并没有等取完缓存，而是直接返回 故此处打印出来的是空值。

function addData(key, value){
	client.connect();
	client.add(key, value, function(err){
		if(err){
			console.log("add error");
			return;
		}
		console.log("add success");
		client.close();
	});
}

function deleteData(key){
	client.connect();
	client.delete(key, function(err){
		if(err){
			console.log("delete error");
			return;
		}
		console.log("deleted");
		client.close();
	});
}

exports.client = client;
exports.getData = getData;
exports.addData = addData;
exports.deleteData = deleteData;


