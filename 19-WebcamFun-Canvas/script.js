const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const colorDecayInputs = document.querySelectorAll('[data-couleur]');

let redDecay, greenDecay, blueDecay;
redDecay = 0;
greenDecay = 0;
blueDecay = 0;



function getVideo(){
	navigator.mediaDevices.getUserMedia({ video : true, audio : false})
		.then(localMediaStream =>{
			console.log(localMediaStream);
			video.src = window.URL.createObjectURL(localMediaStream);
			video.play();
		})
		.catch(err =>{
			console.log('error : ', err);
		})
}

function paintToCanvas(){
	const width = video.videoWidth;
	const height = video.videoHeight;

	canvas.width = width;
	canvas.height = height;

	return setInterval(()=>{
		ctx.drawImage(video, 0, 0, width, height);

		// sortir les picels
		let pixels = ctx.getImageData(0,0,width,height);

		// lancer un filtre
		// pixels = redEffect(pixels);
		pixels = rgbSplit(pixels);




		// console.log(pixels);
		// debugger;

		// remettre les pixels
		ctx.putImageData(pixels, 0, 0);


		// Ghost mode :
		// ctx.globalAlpha = 0.08;

	}, 16);
}

function takePhoto(){
	//play the sound
	snap.currentTime = 0;
	snap.play();

	//take the data
	const data = canvas.toDataURL('image/jpeg');
	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', 'coolGuy');
	link.innerHTML = `<img src="${data}" alt="coolGuy">`;

	strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels){
	for(let i = 0; i < pixels.data.length; i += 4){
		// red
		pixels.data[i + 0] = pixels.data[i + 0] + 100;

		// green
		pixels.data[i + 1] = pixels.data[i + 1] - 50;

		// blue
		pixels.data[i + 2] = pixels.data[i + 2] * 0.2;
	}
	return pixels;
}

function rgbSplit(pixels){
	for(let i = 0; i < pixels.data.length; i += 4){
		// red
		pixels.data[i + redDecay] = pixels.data[i + 0];

		// green
		pixels.data[i + greenDecay] = pixels.data[i + 1];

		// blue
		pixels.data[i + blueDecay] = pixels.data[i + 2];
	}

	redDecay++;
	greenDecay = redDecay * 8;

	return pixels;
}

function changeDecayVals(e){
	// console.log(e.target.value);
	switch (e.target.dataset.couleur) {
		case 'red':
			redDecay = parseFloat(e.target.value);
			break;
		
		case 'green':
			greenDecay = parseFloat(e.target.value);
			break;		
				
		case 'blue':
			blueDecay = parseFloat(e.target.value);
			break;
	}
}

getVideo();


video.addEventListener('canplay', paintToCanvas);

colorDecayInputs.forEach(element => {
	element.addEventListener('change', changeDecayVals);
	element.addEventListener('mousemove', changeDecayVals);
});















