document.getElementById("addButton").onclick = function(){
	var UserInput = document.getElementById("userInput").value;
	var li = "<li>" + UserInput + "</li>";

	document.getElementById("mylist").innerHTML +=li;
	document.getElementById("userInput").value = "";
}
