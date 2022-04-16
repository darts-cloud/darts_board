

class DartsBoard {

    static NUMBER_MAP = {
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
    
    
    constructor() {
        this.STROKE_STYLE = 'black';
        this.DEFAULT_COLOR = 'white';
        this.MULTI_COLOR_RED = 'red';
        this.MULTI_COLOR_GREEN = 'green';
        this.SINGLE_COLOR_WHITE = 'white';
        this.SINGLE_COLOR_BLACK = 'black';
        this.STROKE_WIDTH = 2;
        this.CENTER_X = 180;
        this.CENTER_Y = 180;
    }
    drawBoard() {
    	// 各ナンバー描画
    	for (var i = 1; i<=20; i++) {
    		this.drawSlice(i, DartsBoard.NUMBER_MAP[i]);
    	}

    	// ブル描画
    	this.drawBull();

    	// 着色
    	this.drawDefaultColor();
    	
    	this.drawText("20", 180, 15);
    	this.drawText("1" , 230, 25);
    	this.drawText("18", 280, 50);
    	this.drawText("4" , 315, 85);
    	this.drawText("13", 340, 130);
    	this.drawText("6" , 345, 180);
    	this.drawText("10", 340, 230);
    	this.drawText("15", 315, 275);
    	this.drawText("2" , 280, 310);
    	this.drawText("17", 230, 335);
    	this.drawText("3" , 180, 343);
    	this.drawText("19", 130, 335);
    	this.drawText("7" ,  80, 310);
    	this.drawText("16",  40, 275);
    	this.drawText("8" ,  20, 230);
    	this.drawText("11",  15, 180);
    	this.drawText("14",  20, 130);
    	this.drawText("9" ,  40, 85);
    	this.drawText("12",  80, 50);
    	this.drawText("5" , 130, 25);
    }
    
    /**
     * ナンバー描画
     */
     drawSlice(num, numberName) {
    	// 角度を算出
    	let baseAngles = (num - 1) * (360 / 20);

    	// インナーシングル描画
    	this.drawInnerSingle(baseAngles, numberName);
    	
    	// アウターシングル描画
    	this.drawOuterSingle(baseAngles, numberName);

    	// トリプル描画
    	this.drawTriple(baseAngles, numberName);

    	// ダブル描画
    	this.drawDouble(baseAngles, numberName);
    }

    /**
     * インナーシングル描画
     */
    drawInnerSingle(baseAngles, numberName) {
    	$('canvas').drawSlice({
    		strokeStyle: this.STROKE_STYLE,
    		strokeWidth: this.STROKE_WIDTH,
    		fillStyle: this.DEFAULT_COLOR,
    		name: numberName + "IS",
    		layer: true,
    		x: this.CENTER_Y, y: this.CENTER_Y,
    		radius: 80,
    		// start and end angles in degrees
    		start: baseAngles - 9, end: baseAngles + 9
    	});
    }

    /**
     * アウターシングル描画
     */
    drawOuterSingle(baseAngles, numberName) {
    	var startX = this.CENTER_X + Math.sin((baseAngles-9) * Math.PI / 180) * 88;
    	var startY = this.CENTER_Y + Math.cos((baseAngles-9) * Math.PI / 180) * -90;
    	$('canvas').drawVector({
    		strokeStyle: this.STROKE_STYLE,
    		strokeWidth: this.STROKE_WIDTH,
    		fillStyle: this.DEFAULT_COLOR,
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
    drawDouble(baseAngles, numberName) {
    	var startX = this.CENTER_X + Math.sin((baseAngles-9) * Math.PI / 180) * 132;
    	var startY = this.CENTER_Y + Math.cos((baseAngles-9) * Math.PI / 180) * -132;
    	// Draw a closed path (making a triangle)
    	$('canvas').drawVector({
    		strokeStyle: this.STROKE_STYLE,
    		strokeWidth: this.STROKE_WIDTH,
    		fillStyle: this.DEFAULT_COLOR,
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
    drawTriple(baseAngles, numberName) {
    	var startX = this.CENTER_X + Math.sin((baseAngles-9) * Math.PI / 180) * 68;
    	var startY = this.CENTER_Y + Math.cos((baseAngles-9) * Math.PI / 180) * -70;
    	// Draw a closed path (making a triangle)
    	$('canvas').drawVector({
    		strokeStyle: this.STROKE_STYLE,
    		strokeWidth: this.STROKE_WIDTH,
    		fillStyle: this.DEFAULT_COLOR,
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
    drawBull() {
    	// Draw a full circle
    	$('canvas').drawArc({
    		strokeStyle: this.STROKE_STYLE,
    		strokeWidth: this.STROKE_WIDTH,
    		fillStyle: this.DEFAULT_COLOR,
    		name: "SB",
    		layer: true,
    		x: this.CENTER_X, y: this.CENTER_Y,
    		radius: 16
    	});
    	// Draw a full circle
    	$('canvas').drawArc({
    		strokeStyle: this.STROKE_STYLE,
    		strokeWidth: this.STROKE_WIDTH,
    		fillStyle: this.DEFAULT_COLOR,
    		name: "DB",
    		layer: true,
    		x: this.CENTER_X, y: this.CENTER_Y,
    		radius: 6
    	});
    }
    
    drawText(text, x, y) {
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
    
    drawDefaultColor() {
    	var singleColor = "";
    	var multipleColor = "";
    	var number_name = "";
    	for (var num = 1; num <= 20; num++) {
    		if (num % 2 == 1) {
    			singleColor = this.SINGLE_COLOR_BLACK;
    			multipleColor = this.MULTI_COLOR_RED;
    		} else {
    			singleColor = this.SINGLE_COLOR_WHITE;
    			multipleColor = this.MULTI_COLOR_GREEN;
    		}
    		number_name = DartsBoard.NUMBER_MAP[num];
    		this.drawColor(number_name + "IS", singleColor);
    		this.drawColor(number_name + "OS", singleColor);
    		this.drawColor(number_name + "D", multipleColor);
    		this.drawColor(number_name + "T", multipleColor);
    	}
    	this.drawColor("SB", this.MULTI_COLOR_RED);
    	this.drawColor("DB", this.SINGLE_COLOR_BLACK);
    	this.refresh();
    }
    
    /**
     * 着色（一箇所だけ）
     */
    drawColorOnce(number, color) {
    	// ボードの色初期化
    	this.drawDefaultColor();
    	// 一箇所だけ着色
    	$('canvas').getLayer(number).fillStyle = color;
    	// 再描画
    	refresh();
    }

    /**
     * 着色
     */
    drawColor(number, color) {
    	$('canvas').getLayer(number).fillStyle = color;
    }

    /**
     * 再描画
     */
    refresh() {
    	// 再描画
    	$('canvas').drawLayers();
    }
    
}

