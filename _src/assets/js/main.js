'use strict';

// transition menu
document.querySelector("#button__menu").addEventListener("click", function() {
this.classList.toggle( "active" );
  });
	
// effect menu
var buttonNav = document.querySelector('.button__menu');
var body = document.querySelector('.body');
var close = document.querySelector('.button__menu');
function clickMenu(){
	body.classList.toggle('menu__visible');
}
buttonNav.addEventListener('click', clickMenu);

// close the menu when click on the screen
var click = document.querySelector('.burguer');
click.addEventListener('click', clickMenu);

// change to the cross to menu
function crossToNav(){
	if (!body.classList.contains('menu__visible')){
		buttonNav.classList.remove('active');
	}
}
body.addEventListener('click', crossToNav);

