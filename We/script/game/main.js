function goTo(playerObj, mapId, nodeId){
	playerObj.mapId = mapId;
	playerObj.nodeId = nodeId;
}

var mapObj = maoyinCreat();
var playerObj = new PlayerCreat();

function main(){
	$('.pos').click(function(event) {
	var tg = event.target;  // 获取被点击的button对象
	goTo(playerObj, playerObj.mapId, $(tg).attr("id"));
	alert("Now Pos:" + (playerObj.nodeId).toString());
	});
}
main();