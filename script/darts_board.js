var DEFINE_STROKE_STYLE = 'black';
var DEFINE_STROKE_WIDTH = 2;
var DEFINE_CENTER_X = 180;
var DEFINE_CENTER_Y = 180;

var DEFINE_DEFAULT_COLOR = 'white';
var DEFINE_MULTI_COLOR_RED = 'red';
var DEFINE_MULTI_COLOR_GREEN = 'green';
var DEFINE_SINGLE_COLOR_WHITE = 'white';
var DEFINE_SINGLE_COLOR_BLACK = 'black';
var NUMBER_MAP = {
	1 : "20",
	2 : "1",
	3 : "18",
	4 : "4",
	5 : "13",
	6 : "6",
	7 : "10",
	8 : "15",
	9 : "2",
	10 : "17",
	11 : "3",
	12 : "19",
	13 : "7",
	14 : "16",
	15 : "8",
	16 : "11",
	17 : "14",
	18 : "9",
	19 : "12",
	20 : "5"
};

/**
 *  初期表示
 */
function canvas_init() {
	// 各ナンバー描画
	for (var i = 1; i<=20; i++) {
		drawSlice(i, NUMBER_MAP[i]);
	}

	// ブル描画
	drawBull();

	// 着色
	drawDefaultColor();
	
	drawText("20", 180, 15);
	drawText("1" , 230, 25);
	drawText("18", 280, 50);
	drawText("4" , 315, 85);
	drawText("13", 340, 130);
	drawText("6" , 345, 180);
	drawText("10", 340, 230);
	drawText("15", 315, 275);
	drawText("2" , 280, 310);
	drawText("17", 230, 335);
	drawText("3" , 180, 343);
	drawText("19", 130, 335);
	drawText("7" ,  80, 310);
	drawText("16",  40, 275);
	drawText("8" ,  20, 230);
	drawText("11",  15, 180);
	drawText("14",  20, 130);
	drawText("9" ,  40, 85);
	drawText("12",  80, 50);
	drawText("5" , 130, 25);
}

/**
 * ナンバー描画
 */
function drawSlice(num, numberName) {
	// 角度を算出
	var baseAngles = (num - 1) * (360 / 20);

	// インナーシングル描画
	drawInnerSingle(baseAngles, numberName);
	
	// アウターシングル描画
	drawOuterSingle(baseAngles, numberName);

	// トリプル描画
	drawTriple(baseAngles, numberName);

	// ダブル描画
	drawDouble(baseAngles, numberName);
}

/**
 * インナーシングル描画
 */
function drawInnerSingle(baseAngles, numberName) {
	$('canvas').drawSlice({
		strokeStyle: DEFINE_STROKE_STYLE,
		strokeWidth: DEFINE_STROKE_WIDTH,
		fillStyle: DEFINE_DEFAULT_COLOR,
		name: numberName + "IS",
		layer: true,
		x: DEFINE_CENTER_Y, y: DEFINE_CENTER_Y,
		radius: 80,
		// start and end angles in degrees
		start: baseAngles - 9, end: baseAngles + 9
	});
}

/**
 * アウターシングル描画
 */
function drawOuterSingle(baseAngles, numberName) {
	var startX = DEFINE_CENTER_X + Math.sin((baseAngles-9) * Math.PI / 180) * 88;
	var startY = DEFINE_CENTER_Y + Math.cos((baseAngles-9) * Math.PI / 180) * -90;
	$('canvas').drawVector({
		strokeStyle: DEFINE_STROKE_STYLE,
		strokeWidth: DEFINE_STROKE_WIDTH,
		fillStyle: DEFINE_DEFAULT_COLOR,
		name: numberName + "OS",
		layer: true,
		rounded: false,
		closed: true,
		x: startX, y: startY,
		a1: baseAngles -  9, l1: 45,
		a2: baseAngles + 90, l2: 42,
		a3: baseAngles + 189 , l3: 45
	});
}

/**
 * ダブル描画
 */
function drawDouble(baseAngles, numberName) {
	var startX = DEFINE_CENTER_X + Math.sin((baseAngles-9) * Math.PI / 180) * 132;
	var startY = DEFINE_CENTER_Y + Math.cos((baseAngles-9) * Math.PI / 180) * -132;
	// Draw a closed path (making a triangle)
	$('canvas').drawVector({
		strokeStyle: DEFINE_STROKE_STYLE,
		strokeWidth: DEFINE_STROKE_WIDTH,
		fillStyle: DEFINE_DEFAULT_COLOR,
		name: numberName + "D",
		layer: true,
		rounded: false,
		closed: true,
		x: startX, y: startY,
		a1: baseAngles - 10, l1: 20,
		a2: baseAngles + 90, l2: 48,
		a3: baseAngles + 187 , l3: 20
	});
}

/**
 * トリプル描画
 */
function drawTriple(baseAngles, numberName) {
	var startX = DEFINE_CENTER_X + Math.sin((baseAngles-9) * Math.PI / 180) * 68;
	var startY = DEFINE_CENTER_Y + Math.cos((baseAngles-9) * Math.PI / 180) * -70;
	// Draw a closed path (making a triangle)
	$('canvas').drawVector({
		strokeStyle: DEFINE_STROKE_STYLE,
		strokeWidth: DEFINE_STROKE_WIDTH,
		fillStyle: DEFINE_DEFAULT_COLOR,
		name: numberName + "T",
		layer: true,
		rounded: false,
		closed: true,
		x: startX, y: startY,
		a1: baseAngles - 10, l1: 20,
		a2: baseAngles + 90, l2: 28,
		a3: baseAngles + 189 , l3: 20
	});

}

/**
 * ブル描画
 */
function drawBull() {
	// Draw a full circle
	$('canvas').drawArc({
		strokeStyle: DEFINE_STROKE_STYLE,
		strokeWidth: DEFINE_STROKE_WIDTH,
		fillStyle: DEFINE_DEFAULT_COLOR,
		name: "SB",
		layer: true,
		x: DEFINE_CENTER_X, y: DEFINE_CENTER_Y,
		radius: 16
	});
	// Draw a full circle
	$('canvas').drawArc({
		strokeStyle: DEFINE_STROKE_STYLE,
		strokeWidth: DEFINE_STROKE_WIDTH,
		fillStyle: DEFINE_DEFAULT_COLOR,
		name: "DB",
		layer: true,
		x: DEFINE_CENTER_X, y: DEFINE_CENTER_Y,
		radius: 6
	});
}

function drawText(text, x, y) {
	$('canvas').drawText({
		name: text + "char",
		layer: true,
		fillStyle: 'black',
		fontStyle: 'bold',
		fontSize: '10pt',
		text: text,
		x: x, y: y,
		maxWidth: 300
	});
}


function drawDefaultColor() {
	var singleColor = "";
	var multipleColor = "";
	var number_name = "";
	for (var num = 1; num <= 20; num++) {
		if (num % 2 == 1) {
			singleColor = DEFINE_SINGLE_COLOR_BLACK;
			multipleColor = DEFINE_MULTI_COLOR_RED;
		} else {
			singleColor = DEFINE_SINGLE_COLOR_WHITE;
			multipleColor = DEFINE_MULTI_COLOR_GREEN;
		}
		number_name = NUMBER_MAP[num];
		drawColor(number_name + "IS", singleColor);
		drawColor(number_name + "OS", singleColor);
		drawColor(number_name + "D", multipleColor);
		drawColor(number_name + "T", multipleColor);
	}
	drawColor("SB", DEFINE_MULTI_COLOR_RED);
	drawColor("DB", DEFINE_SINGLE_COLOR_BLACK);
	refresh();
}

$(function() {
	// ボード描画
	canvas_init();
});

/**
 * 着色（一箇所だけ）
 */
function drawColorOnce(number, color) {
	// ボードの色初期化
	drawDefaultColor();
	// 一箇所だけ着色
	$('canvas').getLayer(number).fillStyle = color;
	// 再描画
	refresh();
}

/**
 * 着色
 */
function drawColor(number, color) {
	$('canvas').getLayer(number).fillStyle = color;
}

/**
 * 再描画
 */
function refresh() {
	// 再描画
	$('canvas').drawLayers();
}
