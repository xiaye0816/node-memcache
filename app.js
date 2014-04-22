var client1 = require("./client1");
var client2 = require("./client2");

var clients = [client1, client2];
serverNum = clients.length;

var calculate = require("./calculate");

function addData(key, value){
	try{
		var serverId = calculate.cal(key, serverNum);
		// console.log(serverId);
		clients[serverId].addData(key, value);
	}catch(e){
		console.log("addData error!");
	}
	
}

function getData(key){
	try{
		var serverId = calculate.cal(key, serverNum);
		console.log(serverId);

		return clients[serverId].getData(key);
		// return value;
	}catch(e){
		console.log("getData error!");
	}
}

function deleteData(key){
	try{
		var serverId = calculate.cal(key, serverNum);
		console.log(serverId);
		clients[serverId].deleteData(key);
	}catch(e){
		console.log("delete error!");
	}finally{
		console.log("finally");//在nodejs中，finally没什么意义，因为不会等try执行完才执行！
	}
}

exports.addData = addData;
exports.getData = getData;
exports.deleteData = deleteData;

// addData("ijo23dad", "xiaye");
getData("test");


