'use strict';

var flag = true;
var btnPath = 'images/button';

document.addEventListener( "DOMContentLoaded", function(){
	var btn = document.getElementById('btn');

	btn.addEventListener('mouseover', changePicture);
	btn.addEventListener('mouseout', changePicture);
	btn.addEventListener('click', play)

	function play() {
		var button = document.getElementById("inception");
		button.play()
	};	

	function changePicture() {
		this.src = btnPath + (flag ? '-over' : '') + '.gif';
		flag = !flag;
	};

}, false);
