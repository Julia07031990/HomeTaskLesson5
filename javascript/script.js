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