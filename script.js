const con = document.querySelector('#content');
const code = document.querySelector('#code');
const copyBut = document.querySelector('#copyBut');
const genBut = document.querySelector('#generateButton');
genBut.addEventListener('click', function(){
  let gfx = [];
  for (i = 0; i < 49; i++){
    gfx.push(document.querySelector(`#gfx-${i}`).value);
  }
  let c = 'const style = "';
  gfx[0] ? c += `#panel{background-image: url(${gfx[0]});}<br>` : null;
  gfx[1] ? c += `#chat, #chattabs, #chattabs s{background-image: url(${gfx[1]});}<br>` : null;
  gfx[2] ? c += `#chat.left, #chattabs.left, #chat.left #chattabs s{background-image: url(${gfx[2]});}<br>` : null;
  gfx[3] ? c += `#alert .a1, #alert .a3, #alert button, #dlgwin .w1, #staminashop .a1, #staminashop .a3, BUTTON.bal_ok, BUTTON.bal_cancel, BUTTON.bal_yes, BUTTON.bal_no, BUTTON.bal_pay, BUTTON.bal_pay_increase, BUTTON.bal_pay_decrease {background-image: url(${gfx[3]}) !important;}<br>` : null;
  gfx[4] ? c += `#alert, #dlgwin, #staminashop, #upgradeclandepoalert, .MM-alert {background-image: url(${gfx[4]}) !important;}<br>` : null;
  gfx[5] ? c += `.closebut, .close-but{background-image: url(${gfx[5]});}<br>` : null;
  gfx[6] ? c += `#dlgwin .w2{background-image: url(${gfx[6]}) !important;}<br>` : null;
  c += '"; const styleElement = document.createElement("style"); styleElement.innerHTML = style; document.getElementsByTagName("head")[0].appendChild(styleElement);';
  if(c !== 'const style = ""; const styleElement = document.createElement("style"); styleElement.innerHTML = style; document.getElementsByTagName("head")[0].appendChild(styleElement);'){
    con.style.display = 'block';
    code.innerHTML = c;
    con.insertBefore(code, copyBut);
  }else{
    genBut.style = 'border-color: #ff8a82; color: #ff8a82; transition: .5s';
    genBut.innerHTML = 'Wypełnij pole!';
    genBut.classList.add('shake');
    setTimeout(function(){
      genBut.style = 'border-color: #BBB; color: #555;';
      genBut.innerHTML = 'Generuj kod';
      genBut.classList.remove('shake');
    }, 1000);
  }
});
copyBut.addEventListener('click', function() {
  let $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('div#code').text()).select();
  document.execCommand("copy");
  $temp.remove();
  copyBut.style = 'border-color: #33C3F0; color: #33C3F0; transition: .5s';
  copyBut.innerHTML = 'Skopiowano!';
  setTimeout(function(){
    copyBut.style = 'border-color: #BBB; color: #555;';
    copyBut.innerHTML = 'Skopiuj do schowka';
  },2000);
});


const toTop = document.querySelector('#scroll-to-top');
function scroll() {
  if (window.scrollY > document.body.scrollHeight * 0.33) {
    toTop.style.top = '83vh';
  } else {
    toTop.style.top = '105vh';
  }
}
scroll();
window.addEventListener('scroll', scroll);
toTop.addEventListener('click', function () {
  window.scrollTo(0, 0);
});
