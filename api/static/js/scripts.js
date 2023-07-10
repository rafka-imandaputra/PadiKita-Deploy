let list = document.querySelectorAll(".collapse");

list.forEach((desc) => {
	desc.addEventListener("click", () => {
		desc.classList.toggle("open");
	});
});

// MENU
let menuBtn = document.getElementById("menu-btn");
if (menuBtn) {
	menuBtn.addEventListener("click", () => {
		document.querySelector("header nav").classList.toggle("open");
	});
}