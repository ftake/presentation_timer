function formatTimeToString(min, sec) {
	if (min < 10) {
		min = "0" + min;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}
	return min + ":" + sec
}

function PresenTimer() {
	this.passed = 0; //sec
	this.timeout = 300; //sec
	this.tick = function() {
		this.passed++;
		this.update();
	}
	this.update = function() {
		var remaining = this.timeout - this.passed;
		var min = Math.floor(remaining / 60);
		var sec = remaining % 60;
		fieldTime.firstChild.nodeValue = formatTimeToString(min, sec);
	}
	this.start = function() {
		this.tod = setInterval("timer.tick()", 1000);
		btnStartStop.setAttribute("onclick", "timer.stop()");
		btnStartStop.setAttribute("value", "Stop");
	}
	this.reset = function() {
		this.passed = 0;
		this.update();
	}
	this.stop = function() {
		clearInterval(this.tod);
		this.tod = null;
		btnStartStop.setAttribute("onclick", "timer.start()");
		btnStartStop.setAttribute("value", "Start");
	}
	this.setTimeout = function(sec) {
		this.timeout = sec;
		this.update();
	}
	this.update();
}

function set() {
	timer.setTimeout(inputTimeout.valueAsNumber / 1000);
}

var btnReset = document.getElementById("btn_reset");
btnReset.setAttribute("onclick", "timer.reset()");
var btnConfig = document.getElementById("btn_config");
btnConfig.setAttribute("onclick", "config()");
var btnStartStop = document.getElementById("btn_start-stop");
btnStartStop.setAttribute("onclick", "timer.start()");
var btnSet = document.getElementById("btn_set");
btnSet.setAttribute("onclick", "set()");
var fieldTime = document.getElementById("time");
var inputTimeout = document.getElementById("in_timeout");

var timer = new PresenTimer();
set();
