const containers = document.querySelectorAll(".container");
gsap.defaults({
	duration: 0.25
});

containers.forEach(function(container, index) {
	const tl = gsap.timeline({
		paused: true
	}).set(container.querySelector(".bullet"), {
		css: {
			zIndex: 2,
			opacity: 1	
		}
	}).to(container.querySelector(".text"), {	
		scale: 1.25	
	}).to(container.querySelector(".bullet"), {	
		x: -50
	});
	container.addEventListener("mouseenter", () => tl.play());
	container.addEventListener("mouseleave", () => tl.reverse());	
});

var btn = document.getElementById("products");

btn.onclick = productMenu;

function productMenu() {
	document.body.style.background = "#fff url('./product-menu-bg.jpg') no-repeat center center";
	var request = new XMLHttpRequest();
	request.open("GET", "./pages/product-menu.php");
	request.onreadystatechange = function() {
		if(this.readyState === 4 && this.status === 200) {
			document.getElementById("body-container").innerHTML = this.responseText;
		}
	};
	request.send();
}
// function init() {
// }
// init();


// button.addEventListener("mouseenter", function(){
// 	tween.restart()
// })
