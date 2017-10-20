const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const articles = ['the', 'a', 'an'];
let  bandsLi = '';


// my way (long)
function isThereArticle(data){
	let words = data
					.split(' ')
					.map((element, index) => element.toLowerCase());

  	if(articles.includes(words[0]))
  		words.shift();

  	return words.join(' ');
}

//wes bos way (shorter)
function amputer(bandName){ return bandName.replace(/^(a |an |the )/i, '') }

//mine
// const tried = bands.sort( (elementA, elementB) => isThereArticle(elementA) > isThereArticle(elementB) ? 1 : -1);
//his
const tried = bands.sort( (elementA, elementB) => amputer(elementA) > amputer(elementB) ? 1 : -1);

// tried.map(element => bandsLi += `<li>${element}</li>\n`);

// document.querySelector('#bands').innerHTML = bandsLi;

document.querySelector('#bands').innerHTML = tried
												.map(element => `<li>${element}</li>\n`)
												.join('');



