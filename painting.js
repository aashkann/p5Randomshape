//Based code credited to https://openprocessing.org/user/210990?view=sketches&o=48

let colors = ["#D4D7DC", "#0C76DB", "#FFEB3B", "#F13E57","#3E4FF1","#5f545"];

function setup() {
	createCanvas(1200, 600);
	//background("#f5f7fa");
	background("#EEEEEE");
	angleMode(DEGREES);
	noLoop();
	blendMode(BURN);

	tex = createGraphics(width, height);
	let c = color(random(colors));
	c.setAlpha(100);
	tex.noStroke();
	tex.fill(c);
	for (let i = 0; i < width * height * 0.05; i++) {
		let x = random(width);
		let y = random(height);
		let size = noise(x * 0.01, y * 0.01) * 1.5 + 0.5;
		tex.ellipse(x, y, size, size);
	}
}

function draw() {
	image(tex, 0, 0);
	drawCell();
}

function drawCell() {
	let cells = 5;
	let offset = width / 20;
	let w = (width - offset * 2) / cells;
	let h = (height - offset * 2) / cells;

	shadow();

	for (let j = 0; j < cells; j++) {
		for (let i = 0; i < cells; i++) {
			let x = offset + i * w;
			let y = offset + j * h;
			let cx = x + w / 2;
			let cy = y + h / 2;
			let stroke_num = 10;
			let d = w * random(0, 0.5); //d = w - stroke_num

			push();
			translate(cx, cy);
			stroke(random(colors));

			let num = int(3, 11);
			for (let n = 0; n < num; n++) {
				let angle = 360 / num;
				rotate(angle);
				one(d);
			}
			pop();
		}
	}

	function one(d) {
		push();
		//noStroke();
		fill(random(colors));

		let s = random(w * 0.4, w);
		let x1 = -s / 2; 
		let y1 = -d / 2;
		let x2 = s / 2;
		let y2 = -d / 2;
		let x3 = x2;
		let y3 = d / 2;
		let x4 = x1;
		let y4 = d / 2;
		beginShape();
		curveVertex(x1, y1);
		curveVertex(x4, y4);
		vertex(x4, y4);
		vertex(x3, y3);
		curveVertex(x3, y3);
		curveVertex(x2, y2);
		vertex(x1, y1);
		endShape();
		pop();
	}
}


function shadow() {
	drawingContext.shadowOffsetX = 10;
	drawingContext.shadowOffsetY = 10;
	drawingContext.shadowBlur = 0;
	drawingContext.shadowColor = color(random(colors));
}