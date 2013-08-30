// schne324 - simple menus
// feel free to do what you want with this
var container = document.getElementById('container'),
	vertNav = container.querySelector('.vert-nav'),
	vertNavLis = vertNav.querySelectorAll('.vert-nav li a'),
	droplet = document.getElementById('droplet'),
	bubbler =  document.getElementById('bubbler');


droplet.addEventListener('mouseover', function () {
	$(bubbler).stop(true, true).fadeIn(500);
});

droplet.addEventListener('mouseout', function () {
	$(bubbler).stop(true, true).fadeOut(300);
});

// add active to actively hovered items,
// and 'idle' to those NOT being hovered
for (var i = vertNavLis.length - 1; i >= 0; i--) {
	var li = vertNavLis[i];

	li.addEventListener('mouseover', function (mouseEvent) {
		$(mouseEvent.target).addClass('active');
		//find the parent (li)'s siblings children (a) and add .idle class
		$(mouseEvent.target.parentNode).siblings().children().addClass('idle');
	});

	li.addEventListener('mouseout', function (mouseEvent) {
		$(mouseEvent.target).removeClass('active');
		$(mouseEvent.target.parentNode).siblings().children().removeClass('idle');
	});
};
///////////////////////////////
//////////  horizon  //////////
///////////////////////////////
var horizon = document.querySelector('.horizon-nav'),
	horizonItems = horizon.querySelectorAll('a');

	console.log('horizonItems:', horizonItems);

for (var i = horizonItems.length - 1; i >= 0; i--) {
	var item = horizonItems[i];

	item.addEventListener('mouseover', function (mouseEvent) {
		$(mouseEvent.target).addClass('active');
		//find the parent (li)'s siblings children (a) and add .idle class
		$(mouseEvent.target.parentNode).siblings().children().addClass('idle');

	});

	item.addEventListener('mouseout', function (mouseEvent) {
		$(mouseEvent.target).removeClass('active');
		//find the parent (li)'s siblings children (a) and add .idle class
		$(mouseEvent.target.parentNode).siblings().children().removeClass('idle');
	});
};