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

/*ARROW UP*/
window.onscroll = function(){
	var upButton = document.getElementById('up');
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	if(scroll < 100){
	  hide(upButton);
	}else{
	  show(upButton);
	}
  }
  //subir al principio de la página cuando se hace click en la flecha arriba
  //var arribaButton = document.getElementById('up');
  upButton.onclick = function(){
	  window.scrollTo(0,0);
  }
  