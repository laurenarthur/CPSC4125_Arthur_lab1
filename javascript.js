
$(document).ready(function() {

  var UserInput = document.getElementById("userinput").value;

  var array = [UserInput];

  function addFunction(){
    var list = document.createElement('ul');
    for(i=0;array.length;i++){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));

        list.appendChild(item);

    }
    return mylist;
      //var li = <li> + Array + </li>;
      //document.getElementById("mylist").appendChild(li);
  }
  
});
