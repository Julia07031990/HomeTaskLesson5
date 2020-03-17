document.getElementById("clearButton").onclick = function(e) {
	document.getElementById("textInput").value = "";
}
document.getElementById("sentMessage").onclick = function(e) {
	document.getElementById("textInput").value = "";
	alert("Your message sent");
}
document.getElementById("follow").onclick = function(e) {
	alert("You are follower now!");
}

document.getElementById('messageArea').onclick = function(event) {
	var target = event.target;
	if (target.className == 'hideBar') {
		var subm = document.getElementsByClassName("messageWrap");
		for (var i = 0; i < subm.length; i++) {
		subm[i].style.display = 'block';
	}
	var hbut = document.getElementsByClassName("hideBar");
		for (var i = 0; i < hbut.length; i++) {
		hbut[i].style.display = 'none';
	}
}
} 

document.onclick = function(event){
	var target = event.target;
	if (target.className == 'closeMenu') {
		closeMenu();
	}
}

function closeMenu () {
	var textArea = document.getElementById('messageArea');
	var subm = document.getElementsByClassName("messageWrap");
	for (var i = 0; i < subm.length; i++) {
		subm[i].style.display = 'none';
	}
	var hbut = document.getElementsByClassName("hideBar");
		for (var i = 0; i < hbut.length; i++) {
		hbut[i].style.display = 'block';
	}
}
