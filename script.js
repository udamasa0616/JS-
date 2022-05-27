// ウインドウを読み込んだ時のイベント
//window.addEventListener('load',function(){
// HTMLより読み込むID要素の設定。クラス,セレクタの場合は.querySelector()
// ウインドウを読み込んだ後のイベント
//console.log (pullDownButton);
//});
const pullDownButton  = document.getElementById("lists");
const pullDownParents = document.getElementById("pull-down");

pullDownButton.addEventListener('click', function() {
    //pullDownButton.setAttribute("style","background-color:green;");                
    //console.log (pullDownButton);
    if(pullDownParents.getAttribute('style') == 'display:block;'){
    pullDownParents.removeAttribute("style", "display:block;");
    console.log('非表示');
    }else {
      pullDownParents.setAttribute('style', 'display:block;');
      console.log('表示');
    };
  });

pullDownButton.addEventListener('mouseover',function(){
    this.setAttribute("style","background-color:blue;");
    console.log (pullDownButton);
});

pullDownButton.addEventListener('mouseout',function(){
    this.removeAttribute("style","background-color:red;");
    console.log (pullDownButton);
  });

