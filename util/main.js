//Selecting elements

const thumbnails = document.querySelector(".thumbnails-container");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const companyName = document.querySelector(".company--name");
const footer = document.querySelector(".footer");

console.log(thumbnails);
const showSummary = function (entries) {
	const [entry] = entries;
	console.log(entry);
	// console.group(thumbnails.getBoundingClientRect());
	if (!entry.isIntersecting) thumbnails.scrollIntoView();
};

const observer = new IntersectionObserver(showSummary, {
	root: null,
	threshold: 0,
	// rootMargin: "-30px",
});

observer.observe(companyName);
