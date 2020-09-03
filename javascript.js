
$(document).ready(function() {

  var UserInput = document.getElementById("userinput").value;

  function addFunction(){
      var li = <li> + UserInput + </li>;

      document.getElementById("mylist").appendChild(li);
  }
  
});
