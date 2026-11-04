lastnight = document.getElementById("myLastnight");
kiss = document.getElementById("kiss");
par1 = document.getElementById("par1");
par2 = document.getElementById("par2");
par3 = document.getElementById("par3");
par4 = document.getElementById("par4");
minicon1 = document.getElementById("minicon1");
minicon2= document.getElementById("minicon2");
minicon3= document.getElementById("minicon3");
minicon4= document.getElementById("minicon4");

kiss.addEventListener('click', ()=>{
  lastnight.play();
  kiss.src="emoji-love.png";
});
function mouseover1(){
  par1.style.opacity='1';
  minicon1.style.backgroundImage ="url('blur1.png')";
}
function mouseover2() {
  par2.style.opacity='1';
  minicon2.style.backgroundImage ="url('blu2.png')";
}
function mouseover3() {
  par3.style.opacity='1';
  minicon3.style.backgroundImage = "url('blur3.png')";
}
function mouseover4() {
  par4.style.opacity='1';
  minicon4.style.backgroundImage ="url('blur4.png')";
}
function mouseout1() {
  par1.style.opacity='0';
  minicon1.style.backgroundImage ="url('noblu1.png')";
}
function mouseout2() {
  par2.style.opacity='0';
  minicon2.style.backgroundImage ="url('noblu2.png')";
}
function mouseout3() {
  par3.style.opacity='0';
  minicon3.style.backgroundImage ="url('noblur3.png')";
}
function mouseout4() {
  par4.style.opacity='0';
  minicon4.style.backgroundImage ="url('noblur4.png')";
}