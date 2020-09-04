
$(document).ready(function() {


  function addFunction(mylist){
    var text = "";
    var inputs = document.querySelectorAll("userinput");
    for (var i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    var li = document.createElement("li");
    var node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("mylist").appendChild(li);
      //var li = <li> + Array + </li>;
      //document.getElementById("mylist").appendChild(li);
  }
  
});
