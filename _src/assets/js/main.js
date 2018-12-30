'use strict';

// transition menu
document.querySelector("#button__menu").addEventListener("click", function() {
this.classList.toggle('active');
  });
	
// effect menu
let buttonNav = document.querySelector('.button__menu');
let body = document.querySelector('.body');
function clickMenu(){
	body.classList.toggle('menu__visible');
}
buttonNav.addEventListener('click', clickMenu);

// close the menu when click on the screen
let click = document.querySelector('.burguer');
click.addEventListener('click', clickMenu);

// change to the cross to menu
function crossToNav(){
	if (!body.classList.contains('menu__visible')){
		buttonNav.classList.remove('active');
	}
}
body.addEventListener('click', crossToNav);

/*ARROW UP*/
function show(element){
  element.classList.remove('invisible');
  element.classList.add('visible');
}

function hide(element){
  element.classList.remove('visible');
  element.classList.add('invisible');
}
window.onscroll = function(){
	let upButton = document.getElementById('up');
	let scroll = document.documentElement.scrollTop || document.body.scrollTop;
	if(scroll < 90){
		hide(upButton);
	}else{
		show(upButton);
	}
} 

let upButton = document.getElementById('up');
upButton.onclick = function(){
	window.scrollTo(0,0);
}

function scroll(element) {
  window.scrollTo({
		top: element.offsetTop - 120,
		left: 0,
		behavior: 'smooth'
	});
}

document.querySelectorAll(".nav__link").forEach(element => {
	element.addEventListener('click', e => {
		e.preventDefault();
		let anchor = element.href;
		scroll(document.getElementById(anchor.substring( anchor.indexOf('#')+1, anchor.length)));
	});
});


