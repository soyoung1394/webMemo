window.onload=function init(){
var save=document.getElementById("save");
save.onclick=saveContent;
var list=document.getElementById("list");
list.onclick=showList;
}
function saveContent(){
  var key = document.getElementById("title").value;
  var value=document.getElementById("content").value;
  localStorage.setItem(key,value);
  showList(value);
}
function showList(value){
  var show=document.getElementById("show");
  show.innerHTML=value;
}
