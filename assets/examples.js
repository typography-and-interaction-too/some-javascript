console.log("Hello, world")

// alert("These are annoying!")



// This waits until the browser parses the page.
window.addEventListener('DOMContentLoaded', () => {
	// Set up some variables. These wont’t change, so they are *constants*.
	// If the variables need to change, use `let`.
	const lightBoxButton = document.querySelector('button') // These use normal CSS selectors.
	const lightBox = document.querySelector('.lightbox')
	// console.log(lightBoxButton)

	// Watch for clicks on the element.
	lightBoxButton.addEventListener('click', () => {
		lightBox.classList.remove('hidden')
	})

	// Shorthand for the `click` event.
	lightBox.onclick = () => {
		lightBox.classList.add('hidden')
	}



	// toggleClassOnClick(lightBoxButton, lightBox, 'hidden')
	// toggleClassOnClick(lightBox, lightBox, 'hidden')



	// Note the `All` here, getting multiple items.
	const images = document.querySelectorAll('.grid > img')
	const visibleClass = 'visible'
	// console.log(images)

	// Go through the list.
	images.forEach((image) => {
		const imageObserver = new IntersectionObserver(entries => {
			const [entry] = entries
			// This is a "ternary" operator—a condensed if/else.
			entry.isIntersecting ? image.classList.add(visibleClass) : image.classList.remove(visibleClass)
		}, {
			rootMargin: '-10% 0% -10% 0%', // This is CSS-like: top/right/bottom/left.
		})

		imageObserver.observe(image)
	})
});



// Use functions for repeated behaviors. Don’t Repeat Yourself!
const toggleClassOnClick = (clickElement, classElement, className) => {
	clickElement.onclick = () => {
		// This is an if/else statement!
		if (classElement.classList.contains(className)) {
			classElement.classList.remove(className)
		} else {
			classElement.classList.add(className)
		}

		// Or…
		// classElement.classList.toggle(className)
	}
}
