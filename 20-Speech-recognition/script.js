
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e =>{
	console.log(e.results);

	const transcript = Array.from(e.results)
							.map(result => result[0])
							.map(result => result.transcript)
							.join(' ');
	p.textContent = transcript;

	console.log(transcript);
	console.log(e.results[0].isFinal);

	if(e.results[0].isFinal){
		p = document.createElement('p');
		words.appendChild(p);
	}


	// MATCHES

	if(transcript.match(/^reload$/gi))
		window.location.reload();

	if(transcript.match(/^facebook$/gi))
		window.location = 'http://www.facebook.com';

	if(transcript.match(/^nouvel onglet$/gi)){
		console.log('MATCH !');
		window.open();
	}

});

recognition.addEventListener('end', recognition.start);

recognition.start();


