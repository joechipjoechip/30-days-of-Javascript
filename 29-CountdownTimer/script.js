


const displayLeft = document.querySelector('.display__time-left');
const displayEnd = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
let interval;

function timer(seconds){
	if(interval)
		clearInterval(interval);

	const now = Date.now();
	let end = ((now + seconds * 1000) - now) / 1000;

	interval = setInterval( () => {

		displayEnd.textContent = secToClock(end);
		end--;


		if(end < 0)
			clearInterval(interval);

	}, 1000);
}

function secToClock(seconds){

	let timeLeft = seconds;

	const days = Math.floor(timeLeft / 86400);

	timeLeft -= days * 86400;

	const hours = Math.floor(timeLeft / 3600);

	timeLeft -= hours*3600;

	const minutes = Math.floor(timeLeft / 60);

	timeLeft -= minutes*60;

	console.log(timeLeft);

	// const secondsLeft = timeLeft%(minutes * 60);

	return `${days} : ${hours} : ${minutes} : ${timeLeft}`;

}


buttons.forEach(element => element.addEventListener('click', e => {
	timer(e.target.dataset.time)
}));
