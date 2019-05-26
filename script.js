var whySukha_btn = document.getElementById('whySukha_btn');
var whySukha = document.getElementsByClassName('whySukha')[0];
var whySukha_close = document.getElementById('whySukha_close');
var main = document.getElementsByClassName('main')[0];
whySukha_btn.addEventListener('click', ()=>{
  whySukha.style.visibility = "visible";
  main.style.display = "none";
});
whySukha_close.addEventListener('click', ()=>{
  whySukha.style.visibility = "collapse";
  main.style.display = "inherit";
});
