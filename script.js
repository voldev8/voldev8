var whySukha_btn = document.getElementById('whySukha_btn');
var whySukha = document.getElementById('whySukha');
var whySukha_close = document.getElementById('whySukha_close');

whySukha_btn.addEventListener('click', ()=>{
  whySukha.style.visibility = "visible";
});
whySukha_close.addEventListener('click', ()=>{
  whySukha.style.visibility = "collapse";
});
