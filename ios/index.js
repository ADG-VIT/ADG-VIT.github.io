var squares = document.querySelectorAll(".squarejs")
for(var i=0; i<squares.length; i++)
{
	squares[i].addEventListener("mouseover",function(){
		this.style.backgroundColor = "white";
	})
}
for(var i=0; i<squares.length; i++)
{
	squares[i].addEventListener("mouseout",function(){
		this.style.backgroundColor = "#eaeaea";
	})
}
var navElements = document.querySelectorAll("li a")
for(var i=0; i<navElements.length;	i++)
{
	navElements[i].addEventListener("mouseover",function(){
		this.style.color="rgb(234, 234, 234)";
	})
}
for(var i=0;	i<navElements.length;	i++)
{
	navElements[i].addEventListener("mouseout",function(){
		this.style.color="white";
	})
}
var glyphs = document.querySelectorAll(".finalanchor");
for(var i=0;	i<glyphs.length; i++)
{
	glyphs[i].addEventListener("mouseover",function(){
		this.style.color = "#eaeaea";
		this.classList.add("bounceOut","animated","wow");
	})
}
for(var i=0;	i<glyphs.length; i++)
{
	glyphs[i].addEventListener("mouseout",function(){
		this.style.color ="white";
		this.classList.remove("bounceOut","animated","wow");
	})
}
/*TIMER */
var countDownDate = new Date("Sep 14, 2018 19:00:00").getTime();
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".days").innerHTML = days1
  document.querySelector(".hours").innerHTML = hours1;
  document.querySelector(".minutes").innerHTML = minutes1;
  document.querySelector(".seconds").innerHTML = seconds1;
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".days").innerHTML = "THE";
    document.querySelector(".hours").innerHTML = "WAIT";
    document.querySelector(".minutes").innerHTML = "IS";
    document.querySelector(".seconds").innerHTML = "OVER";
    document.querySelector(".sub0").style.display="none";

  }
}, 1000);
//SMOOTH SCROLL
var marginY=0;
var destination=0;
var speed=15;
var scroller = null;
function initScroll(elementId){
	destination = document.getElementById(elementId).offsetTop - 70;
	scroller = setTimeout(function(){
		initScroll(elementId);
	},1);
	marginY = marginY + speed;
	if(marginY>=destination)
	{
		clearTimeout(scroller);
	}
	window.scroll(0,marginY);
}
function toTop(){
scroller = setTimeout(function(){
		toTop();
	},1);
	marginY = marginY - speed;
	if(marginY<=0)
	{
		clearTimeout(scroller);
	}
	window.scroll(0,marginY);

}