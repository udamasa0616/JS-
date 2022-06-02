// ウインドウを読み込んだ時のイベント
//window.addEventListener('load',function(){
// HTMLより読み込むID要素の設定。クラス,セレクタの場合は.querySelector()
// ウインドウを読み込んだ後のイベント
//console.log (pullDownButton);
//});
function pullDown(){
const pullDownButton  = document.getElementById("lists");
const pullDownParents = document.getElementById("pull-down");
const pullDownChild   = document.querySelectorAll('.pull-down-list');
const currentList     = document.getElementById('current-list');

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
    
    pullDownChild.forEach(function(list) {
      list.addEventListener('click', function() {
        const value = list.innerHTML
        console.log(value);
        currentList.innerHTML = value
  });
});

pullDownButton.addEventListener('mouseover',function(){
    this.setAttribute("style","background-color:blue;");
    console.log (pullDownButton);
});

pullDownButton.addEventListener('mouseout',function(){
    this.removeAttribute("style","background-color:red;");
    console.log (pullDownButton);
  })
});
};
window.addEventListener('load',pullDown);

// pullDownChild.forEach(function(list) {
//   list.addEventListener('click', function() {
//     const value = list.innerHTML
//     console.log(value);
//     currentList.innerHTML = value
//   if(currentList.innerHTML == 0){
//         let first = document.createElement('a');
//         first.setAttribute('id', 'first');
//         first.insertBefore('href','https://www.javadrive.jp/javascript/array/index10.html');
//         pullDownChild.insertBefore(first, null);
//   }
// });
// });