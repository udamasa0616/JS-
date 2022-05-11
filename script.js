window.addEventListener('load',function(){

  const pullDownButton = document.getElementById("lists");
  console.log (pullDownButton);
});

window.addEventListener('click',function(){

  const pullDownButton = document.getElementById("lists");
  pullDownButton.addEventListener("click",function(){
    pullDownButton.setAttribute("style","background-color:green;");
  });
  console.log (pullDownButton);
});

window.addEventListener('mouseover',function(){

  const pullDownButton = document.getElementById("lists");
  pullDownButton.addEventListener("mouseover",function(){
  pullDownButton.setAttribute("style","background-color:blue;");
});
  console.log (pullDownButton);
});

// ウインドウを読み込んだ時のイベント
window.addEventListener('mouseout',function(){
  // HTMLより読み込むID要素の設定。クラス,セレクタの場合は.querySelecton
  const pullDownButton = document.getElementById("lists");
  // ウインドウを読み込んだ後のイベント
  pullDownButton.addEventListener("mouseout",function(){
  pullDownButton.removeAttribute("style","background-color:red;");
});
  console.log (pullDownButton);
});


