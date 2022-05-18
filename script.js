// ウインドウを読み込んだ時のイベント
window.addEventListener('load',function(){
// HTMLより読み込むID要素の設定。クラス,セレクタの場合は.querySelecton
  const pullDownButton = document.getElementById("lists");
  console.log (pullDownButton);
});

window.addEventListener('click',function(){

  const pullDownButton = document.getElementById("lists");
  console.log (pullDownButton);
});

window.addEventListener('mouseover',function(){

  const pullDownButton = document.getElementById("lists");
  console.log (pullDownButton);
});


window.addEventListener('mouseout',function(){
  
  const pullDownButton = document.getElementById("lists");
  // ウインドウを読み込んだ後のイベント
  console.log (pullDownButton);
});


