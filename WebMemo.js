window.onload=function init(){
  for(var i=0; i<localStorage.length; i++){
    var key=localStorage.key(i);
    var value=localStorage.getItem(key);
    showList(key,value);
  }
}
function showList(key,value){
  var show=document.getElementById("show");
  var memo=document.createElement("li");
  memo.setAttribute("id",key);
  var span=document.createElement("span");
  span.setAttribute("class","memo");
  span.innerHTML=value;
  memo.appendChild(span);
  show.appendChild(memo);
  memo.onclick=deleteMemo;
}
function deleteMemo(e){
  var key=e.target.id;
  if(e.target.tagName.toLowerCase()=="span"){
    key=e.target.parentNode.id;
  }
  localStorage.removeItem(key);
  removeMemoFromDom(key);
}
function removeMemoFromDom(key){
  var memo=document.getElementById(key);
  memo.parentNode.removeChild(memo);
}
