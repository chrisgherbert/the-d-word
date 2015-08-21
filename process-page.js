function replace_urls(find, replace){

	var anchors = document.querySelectorAll('a');

	Array.prototype.forEach.call(anchors, function (element, index) {
		var new_url = element.href.replace(find, replace);
		element.href = new_url;
	});

}

function process_page(){
	replace_urls('drone', '%%placeholder%%');
	document.body.innerHTML = document.body.innerHTML.replace(/drone/g, "toy helicopter");
	document.body.innerHTML = document.body.innerHTML.replace('Drones', 'Toy helicopters');
	document.body.innerHTML = document.body.innerHTML.replace('Drone', 'Toy helicopter');
	replace_urls('%%placeholder%%', 'drone');
}

var domReady = function(callback) {
	document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function(){
	process_page();
});

window.onload = function(){
	process_page();
};
