// ウインドウを読み込んだ時のイベント
//window.addEventListener('load',function(){
// HTMLより読み込むID要素の設定。クラス,セレクタの場合は.querySelecton()
// ウインドウを読み込んだ後のイベント
//console.log (pullDownButton);
//});
const pullDownButton = document.getElementById("lists");

pullDownButton.addEventListener('click',function(){
    pullDownButton.setAttribute("style","background-color:green;");
    console.log (pullDownButton);
  });

pullDownButton.addEventListener('mouseover',function(){
    pullDownButton.setAttribute("style","background-color:blue;");
    console.log (pullDownButton);
});

pullDownButton.addEventListener('mouseout',function(){
    pullDownButton.removeAttribute("style","background-color:red;");
    console.log (pullDownButton);
  });


