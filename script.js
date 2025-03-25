document.addEventListener('DOMContentLoaded',function () {
const aumentarFonteBotao = document.getElementById ('aumentar.fonte');
const diminuiFonteBotao = document.getElementById ('diminui.fonte');

let tamanhoAutualfonte = 1;
aumentarFonteBotao.addEventListener('click',function () {
  tamanhoAutualfonte += 0.1;
  document.body.style.fontSize = `${tamanhoAutualfonte} rem`;
 
});


diminuiFonteBotao.addEventListener('click',function () {
  tamanhoAutualfonte += 0.1;
  document.body.style.fontSize = `${tamanhoAutualfonte} rem`;
});

})