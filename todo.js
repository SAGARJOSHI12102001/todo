var messages=document.getElementById("messages");
var textbox=document.getElementById("textbox");
var button=document.getElementById("button");
button.addEventListener("click",function(){
  var newmessage=document.createElement("li");
  newmessage.innerHTML=textbox.value;
  messages.appendchild(newmessage);
  textbox.value="";
});
