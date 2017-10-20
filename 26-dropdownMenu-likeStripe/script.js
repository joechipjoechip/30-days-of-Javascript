const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');

const nav = document.querySelector('nav');

function handleEnter(e){

	this.classList.add('trigger-enter');
	setTimeout(()=>{
		if(this.classList.contains('trigger-enter'))
			this.classList.add('trigger-enter-active');
	}
		, 150);
	background.classList.add('open');

	const coordsDropContent = this.querySelector('.dropdown').getBoundingClientRect();

	background.style.cssText = `
		transform: translate(
			${coordsDropContent.left + 5 - nav.offsetLeft}px,
			${coordsDropContent.top + 5 - nav.offsetTop}px
			);
		width: ${coordsDropContent.width}px;
		height:${coordsDropContent.height}px;
	`;	
}

function handleLeave(e){
	this.classList.remove('trigger-enter', 'trigger-enter-active');

	background.classList.remove('open');

	background.style.cssText = `
		transform : translate(0,0) rotateX(90deg);
		width: 10px;
		height:10px;
	`;
}


triggers.forEach(element => {
	element.addEventListener('mouseenter', handleEnter);
});

triggers.forEach(element => {
	element.addEventListener('mouseleave', handleLeave);
})