

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const nextArrow = document.querySelector('.arrow-next');
const prevArrow = document.querySelector('.arrow-prev');

// Function to show the current slide
function updateSlide() {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});
	slides[currentSlide].classList.add('active');
}

// Manual navigation
nextArrow.addEventListener('click', () => {
	nextSlide();
	resetAutoSlide(); // Reset auto slide when manually clicked
});

prevArrow.addEventListener('click', () => {
	prevSlide();
	resetAutoSlide(); // Reset auto slide when manually clicked
});

function nextSlide() {
	currentSlide++;
	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}
	updateSlide();
}

function prevSlide() {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	updateSlide();
}

// Auto-slide functionality
let autoSlide = setInterval(() => {
	nextSlide();
}, 3000); // Change slide every 3 seconds

// Reset auto-slide when user clicks arrow
function resetAutoSlide() {
	clearInterval(autoSlide);
	autoSlide = setInterval(() => {
		nextSlide();
	}, 3000);
}

