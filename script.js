var whySukha_btn = document.getElementById('whySukha_btn');
var topLayer = document.getElementById('topLayer');
var close = document.getElementById('close');

whySukha_btn.addEventListener('click', ()=>{
  topLayer.style.visibility = "visible";
});
close.addEventListener('click', ()=>{
  topLayer.style.visibility = "collapse";
})
