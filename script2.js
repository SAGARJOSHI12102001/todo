var messages=document.getElementById("messages");
var textbox=document.getElementById("textbox");
var button=document.getElementById("buttons");
console.log("testing outside function ");

var lst =[];
var count=0;


button.addEventListener("click",function()
{
  console.log("list value below ");
  console.log(lst);
  if(textbox.value!=""){
  console.log("testing inside function ");
  var textboxvalue= textbox.value;
  var flag=1;
  for(var i=0;i<lst.length;i++){
    if(textboxvalue.toLowerCase() === lst[i].toLowerCase())
    {
      console.log("its already repeated");
      flag=0;
      break;
    }
  }

      if(flag == 1){
          var newmessage=document.createElement("li");
            newmessage.innerHTML=textbox.value;
            messages.appendChild(newmessage);
    lst[count]=textboxvalue;
    textbox.value="";
    count++;
    }
  }
else{
alert("please enter text");
}
});
