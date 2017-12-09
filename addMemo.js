window.onload=function init(){
var save=document.getElementById("save_btn");
save.onclick=saveContent;
}
function saveContent(){
  var key = document.getElementById("title").value;
  var value=document.getElementById("content").value;
  localStorage.setItem(key,value);
}
