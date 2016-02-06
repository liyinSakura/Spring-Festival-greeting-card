window.onload = function() {
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	music.onclick = function  () {
		if (audio.paused) {
			audio.play();
			this.setAttribute("class","play");
			//兼容差
			// this.style.animationPlayState = "running";
			// this.style.webkitanimationPlayState = "running";
		} else {
			audio.pause();
			this.setAttribute("class","");
			//兼容差
			// this.style.animationPlayState = "paused";
			// this.style.webkitanimationPlayState = "paused";
		};
	};
};