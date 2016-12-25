// 节点属性
var position = 
[{name:"街道办事处",x:188,y:157},
{name:"仓库",x:497,y:419},
{name:"村长小屋",x:281,y:116},
{name:"装备店",x:387,y:160},
{name:"教堂",x:536,y:178},
{name:"后村小道",x:273,y:198},
{name:"猫隐村小径",x:219,y:366},
{name:"比武场",x:93,y:196},
{name:"猫隐村广场",x:306,y:340},
{name:"村口",x:313,y:494},
{name:"道具店",x:410,y:270},
{name:"宠物托儿所",x:45,y:293},
{name:"宠物研究所",x:445,y:499},
{name:"猫隐村驿站",x:185,y:449},
{name:"牧野草原",x:349,y:570},
{name:"广场小道",x:419,y:379},
{name:"后村林地",x:148,y:53},
{name:"后村谷地",x:51,y:90},
{name:"池边小道",x:216,y:292},
{name:"西村口",x:190,y:538}];
//地区对象
function Maoyin (){
	this.mapId = 0;
	this.name = "猫隐村";       
	this.nodeNum = 20;
	this.nodeArr = new Array();    //地区节点数组
}
//节点对象
function Node (name, x, y, num){
	this.x = x || 0;
	this.y = y || 0;
	this.name = name || "";
	this.num = -1;
	this.monsterList = new Array();
	this.npcList = new Array();
	this.playersList = new Array();
}
function maoyinSet(){
	var maoyin = new Maoyin();
	var count = 0;
	for(var i = 0; i < maoyin.nodeNum; i++){
		maoyin.nodeArr[i] = new Node(position[i].name, position[i].x, position[i].y, count++);
	}
	return maoyin;
}
function drawNode(maoyin){
	var $node = $('<div></div>');
	$node.attr('id', 'nodes');
	for(var i = 0; i < maoyin.nodeNum; i++){
		$node.append('<button class=\"pos\" style=\" left: ' + maoyin.nodeArr[i].x + 'px;top:' + maoyin.nodeArr[i].y + 'px\">' + maoyin.nodeArr[i].name + '</button>');
		// $node.append('<div class=\"pos\" style=\"left: 50px\">' + maoyin.nodeArr[i].name + '</div>');
	}
	$('#mapInterface').append($node);
	$node = $('#nodes .pos');
	for(var i = 0;i < maoyin.nodeNum; i++){
		$($node[i]).attr('id', i);
	}
}

function maoyinCreat(){
	var maoyin = maoyinSet();
	drawNode(maoyin);
}