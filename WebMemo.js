window.onload=function init(){
  for(var i=0; i<localStorage.length; i++){
    var key=localStorage.key(i);
    var value=localStorage.getItem(key);
    showList(value);
  }
}
function showList(value){
  var show=document.getElementById("show");
  var li=document.createElement("li");
  var span=document.createElement("span");
  span.setAttribute("class","memo");
  span.innerHTML=value;
  li.appendChild(span);
  show.appendChild(li);
}
