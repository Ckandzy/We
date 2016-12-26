function goTo(playerObj, mapId, nodeId, nodeName){
	playerObj.mapId = mapId;
	playerObj.nodeId = nodeId;
	playerObj.nodeName = nodeName;
}

var mapObj = maoyinCreat();
var playerObj = new PlayerCreat();

// 属性栏数据写入
function attributeWrite(){
	$('#strength').append(playerObj.strength);
	$('#magic').append(playerObj.magic);
	$('#dexterity').append(playerObj.dexterity);
	$('#constitution').append(playerObj.constitution);
	$('#intelligence').append(playerObj.intelligence);
}
//在元素列表创建史莱姆
function slimeJoin(mapObj, mapId, nodeId){
	for(var i = 0; i < 10; i++){
		mapObj.nodeArr[nodeId].monsterList.push(SlimeCreat());
	}
}
// 元素列表更新
function elementsListUpdate(mapObj, mapId, nodeId){
	var elementsInfo = $('#elementsInfo');
	elementsInfo.html("");
	for(var i = 0; i < mapObj.nodeArr[nodeId].monsterList.length; i++){
		$('<dt><a class="monster"><font>' + mapObj.nodeArr[nodeId].monsterList[i].name + '</font></a><a><img src="./images/UI/a.gif"></a></dt>').appendTo(elementsInfo);
	}
}
function main(){
	// 初始化
	
	slimeJoin(mapObj, mapObj.mapId, 8);
	$('.pos').click(function(event) {
	var tg = event.target;  // 获取被点击的button对象
	// tg.disabled = "disabled";//被点击过的按钮将失去功能
	goTo(playerObj, playerObj.mapId, $(tg).attr("id"), $(tg).attr("title"));
	elementsListUpdate(mapObj, mapObj.mapId, $(tg).attr("id"));
	$('#areaInfo').html('<p>'+ playerObj.mapName + "  " + playerObj.nodeName +'</p>');
	// alert("Now Pos:" + (playerObj.nodeId).toString());
	});
	attributeWrite();
}
main();