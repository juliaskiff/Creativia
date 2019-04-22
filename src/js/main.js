function menuAnimate() {
	const triggers = document.querySelectorAll('.has-children');
	const background  = document.querySelector('.dropdown-bg');
	const nav  = document.querySelector('.menu');
	function handleEnter() {
		this.classList.add('trigger-enter');
    	console.log(this);
		setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
		background.classList.add('open');
		const dropdown = this.querySelector('.dropdown');
		const dropdownCoords = dropdown.getBoundingClientRect();
		console.log(dropdownCoords);
		const navCoords = nav.getBoundingClientRect();
		console.log(navCoords);
		const coords = {
		  height: dropdownCoords.height,
		  width: dropdownCoords.width,
		  top: dropdownCoords.top - navCoords.top - 70,
		  left: dropdownCoords.left - navCoords.left
		};
		console.log(coords);
		background.style.setProperty('width', `${coords.width}px`);
		background.style.setProperty('height', `${coords.height}px`);
		background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
	}
	function handleLeave() {
		this.classList.remove('trigger-enter', 'trigger-enter-active');
		background.classList.remove('open');
	}
	triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
	triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
}

menuAnimate();

