const imageSlider = (currentImg) => {
    document.querySelector('.starbucks').src = currentImg;
}

//Handle circle color
const changeCircleColor = (color) => {
    document.querySelector('.circle').style.background = color;
}
//Handle <span>, .social, .circle tag color
document.getElementById("changeGreen").onclick = function(){
	document.getElementById("output").style.color = '#017143';
	document.getElementById("social").style.background = '#017143';
	document.getElementById("learnmore").style.background = '#017143';
	document.querySelector('.starbucks').src ="https://starbucks-landing-page.netlify.app/public/images/frappuccino-drink-chocolate-starbucks.png";
    document.querySelector('.circle').style.background = '#017143';
}

document.getElementById("changePink1").onclick = function(){
	document.getElementById("output").style.color = '#eb7495';
	document.getElementById("social").style.background = '#eb7495';
	document.getElementById("learnmore").style.background = '#eb7495';
	document.querySelector('.starbucks').src ="https://starbucks-landing-page.netlify.app/public/images/tea-coffee-drink-starbucks-latte.png";
    document.querySelector('.circle').style.background = '#eb7495';
}
document.getElementById("changePink2").onclick = function(){
	document.getElementById("output").style.color = '#d752b1';
	document.getElementById("social").style.background = '#d752b1';
	document.getElementById("learnmore").style.background = '#d752b1';
	document.querySelector('.starbucks').src ="https://starbucks-landing-page.netlify.app/public/images/frappuccino-drink-latte-starbucks-unicorn.png";
    document.querySelector('.circle').style.background = '#d752b1';
}
//Handle menu button
const toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}