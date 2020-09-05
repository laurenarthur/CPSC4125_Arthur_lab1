document.getElementById("addButton").onclick = function(){
	var UserInput = document.getElementById("userInput").value;
	var li = document.createElement("li");
	li.className = "list-group-item";
	li.innerText = UserInput;

	document.getElementById("mylist").appendChild(li);
	document.getElementById("userInput").value = "";
}

document.getElementById("removeButton").onclick = function(){
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('userInputtoDelete');
  filter = input.value.toUpperCase();
  ul = document.getElementById("mylist");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      ul.removeChild(li.childNodes[i]);
    } else {
      li[i].style.display = "none";
    }
  }
}
