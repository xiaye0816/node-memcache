//根据key值和server的数量，定位到一个memcache服务器
function cal(key, num){
	var val = key;
	if(typeof key != "string"){
		console.log(typeof key + " is not String");
		try{
			val = val.toString();
			console.log("val:" + val);
			console.log("length:" + val.length);
		}catch(e){
			console.log("transform to string error");
		}
	}
	
	return val.length % num;
}

exports.cal = cal;
