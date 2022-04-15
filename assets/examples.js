console.log("Hello, world")

// alert("These are annoying!")



// This waits until the browser parses the page.
window.addEventListener('DOMContentLoaded', () => {
	const lightBoxButton = document.querySelector('button') // These use normal CSS selectors.
	const lightBox = document.querySelector('.lightbox')

	// Watch for clicks on the element.
	lightBoxButton.onclick = () => {
		lightBox.classList.remove('hidden')

		lightBox.onclick = () => {
			lightBox.classList.add('hidden')
		}
	}



	// Note the `All` here.
	const images = document.querySelectorAll('.grid > img')
	const visibleClass = 'visible'
	// console.log(images)

	// Go through the list.
	images.forEach((image) => {
		const imageObserver = new IntersectionObserver(entries => {
			const [entry] = entries
			entry.isIntersecting ? image.classList.add(visibleClass) : image.classList.remove(visibleClass)
		}, {
			rootMargin: '-10% 0% -10% 0%', // This is CSS-like: top/right/bottom/left.
		})

		imageObserver.observe(image)
	})
});

