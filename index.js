var randomNo1 = Math.floor(Math.random() * 6 + 1);
var image1 = document.getElementsByClassName('img1')[0];
image1.addEventListener('click', function() {
  document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNo1 + ".png");
  
});
var randomNo2 = Math.floor(Math.random() * 6 + 1);
var image2 = document.getElementsByClassName('img2')[0];
image2.addEventListener('click', function() {
//   var randomNo2 = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNo2 + ".png");
  if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(randomNo2>randomNo1){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
});