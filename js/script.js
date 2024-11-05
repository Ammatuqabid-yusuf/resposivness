console.log("Welcome to Omnifood");

// set the current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
// console.log(currentYear);
yearEl.textContent = currentYear;
yearEl.style.fontweight = 500;

// set the nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

// Smooth scrolling Animation
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		// console.log(e);
		e.preventDefault();
		const href = link.getAttribute("href");
		// console.log(href);

		// Scroll back to the top
		if (href === "#") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}

		// scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			// console.log(sectionEl);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}
		if (link.classList.contains("main-nav-link"))
			headerEl.classList.toggle("nav-open");
	});
});

// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);

		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky");
		}

		if (ent.isIntersecting === true) {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
