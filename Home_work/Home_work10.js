let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {

});

elem.addEventListener('click', function(event) {
	console.log(event); // увидим объект с событием
});