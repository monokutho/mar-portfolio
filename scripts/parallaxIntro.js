var body = document.body;
var container = document.getElementById('container');
var viewportHeight = window.innerHeight;

var isTouchscreen;
var scrollVal = 0;

var layer0 = document.getElementById("layer-0");
var layer1 = document.getElementById("layer-1");
var layer2 = document.getElementById("layer-2");
var layer3 = document.getElementById("layer-3");
var layer4 = document.getElementById("layer-4");
var layer5 = document.getElementById("layer-5");
var layer6 = document.getElementById("layer-6");


// function setup()
// {
// 	var platform = navigator.platform.toLowerCase();
// 	var userAgent = navigator.userAgent.toLowerCase();
//
//     if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 )
// 	{
// 		isTouchscreen = 1;
// 		container.setAttribute("class", "touch");
// 		body.style.backgroundImage = 'none';
// 	}
//
// 	else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1)
// 	{
// 		isTouchscreen = 0;
//
// 		if ($.browser.webkit)
// 		{
// 			$.srSmoothscroll();
// 		}
// 	}
//
// 	else
// 	{
// 		$.srSmoothscroll();
// 		isTouchscreen = 0;
// 	}
//
// }

function parallaxy()
{
	offset6 = -(scrollVal * 1.0);
	offset5 = -(scrollVal * 0.7);
	offset4 = -(scrollVal * 0.5);
	offset3 = -(scrollVal * 0.3);
	offset2 = -(scrollVal * 0.2);
	offset1 = -(scrollVal * 0.1);
	offset0 = 0;

	layer0.style.webkitTransform = "translate3d(0, " + offset0 + "px, 0)";
	layer0.style.MozTransform = "translate3d(0, " + offset0 + "px, 0)";
	layer0.style.msTransform = "translateY(" + offset0 + "px)";
	layer0.style.OTransform = "translate3d(0, " + offset0 + "px, 0)";
	layer0.style.transform = "translate3d(0, " + offset0 + "px, 0)";

	layer1.style.webkitTransform = "translate3d(0, " + offset1 + "px, 0)";
	layer1.style.MozTransform = "translate3d(0, " + offset1 + "px, 0)";
	layer1.style.msTransform = "translateY(" + offset1 + "px)";
	layer1.style.OTransform = "translate3d(0, " + offset1 + "px, 0)";
	layer1.style.transform = "translate3d(0, " + offset1 + "px, 0)";

	layer2.style.webkitTransform = "translate3d(0, " + offset2 + "px, 0)";
	layer2.style.MozTransform = "translate3d(0, " + offset2 + "px, 0)";
	layer2.style.msTransform = "translateY(" + offset2 + "px)";
	layer2.style.OTransform = "translate3d(0, " + offset2 + "px, 0)";
	layer2.style.transform = "translate3d(0, " + offset2 + "px, 0)";

	layer3.style.webkitTransform = "translate3d(0, " + offset3 + "px, 0)";
	layer3.style.MozTransform = "translate3d(0, " + offset3 + "px, 0)";
	layer3.style.msTransform = "translateY(" + offset3 + "px)";
	layer3.style.OTransform = "translate3d(0, " + offset3 + "px, 0)";
	layer3.style.transform = "translate3d(0, " + offset3 + "px, 0)";

	layer4.style.webkitTransform = "translate3d(0, " + offset4 + "px, 0)";
	layer4.style.MozTransform = "translate3d(0, " + offset4 + "px, 0)";
	layer4.style.msTransform = "translateY(" + offset4 + "px)";
	layer4.style.OTransform = "translate3d(0, " + offset4 + "px, 0)";
	layer4.style.transform = "translate3d(0, " + offset4 + "px, 0)";

	layer5.style.webkitTransform = "translate3d(0, " + offset5 + "px, 0)";
	layer5.style.MozTransform = "translate3d(0, " + offset5 + "px, 0)";
	layer5.style.msTransform = "translateY(" + offset5 + "px)";
	layer5.style.OTransform = "translate3d(0, " + offset5 + "px, 0)";
	layer5.style.transform = "translate3d(0, " + offset5 + "px, 0)";

	layer6.style.webkitTransform = "translate3d(0, " + offset6 + "px, 0)";
	layer6.style.MozTransform = "translate3d(0, " + offset6 + "px, 0)";
	layer6.style.msTransform = "translateY(" + offset6 + "px)";
	layer6.style.OTransform = "translate3d(0, " + offset6 + "px, 0)";
	layer6.style.transform = "translate3d(0, " + offset6 + "px, 0)";
}


function scrollHandler(e)
{
	scrollVal = Math.max(window.pageYOffset,0);

	/* UNCOMMENT THESE LINES TO ABORT PARALLAX STUFF */
/*
	isTouchscreen = 1;
	container.setAttribute("class", "touch");
	body.style.backgroundImage = 'none';
	firewatchlogo.style.position = 'absolute';
*/

	if ( isTouchscreen != 1 )
	{
		parallaxy()
	}
}

// body.onload = setup();
document.addEventListener('scroll', scrollHandler, false);

function throttle(callback, limit) {
	var wait = false;
	return function() {
		if (!wait) {
			callback.call();
			wait = true;
			setTimeout(function() {
				wait = false;
			}, limit);
		}
	}
}
