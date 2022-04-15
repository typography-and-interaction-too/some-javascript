console.log("Hello, world")

// alert("These are annoying!")



// This waits until the browser parses the page.
window.addEventListener('DOMContentLoaded', () => {
	const lightBoxButton = document.querySelector('button') // These use normal CSS selectors.
	const lightBox = document.querySelector('.lightbox')

	lightBoxButton.onclick = () => {
		lightBox.classList.remove('hidden')

		lightBox.onclick = () => {
			lightBox.classList.add('hidden')
		}
	}
});

