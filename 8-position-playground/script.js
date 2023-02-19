function setPosition(value) {
	var boxes = document.getElementsByClassName("box");
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.position = value;
	}
}

function setTop(value) {
	var boxes = document.getElementsByClassName("box");
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.top = value + "px";
	}
}

function setRight(value) {
	var boxes = document.getElementsByClassName("box");
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.right = value + "px";
	}
}

function setBottom(value) {
	var boxes = document.getElementsByClassName("box");
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.bottom = value + "px";
	}
}

function setLeft(value) {
	var boxes = document.getElementsByClassName("box");
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.left = value + "px";
	}
}
