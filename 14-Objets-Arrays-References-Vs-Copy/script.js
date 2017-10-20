// ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS ARRAYS

const arr = ['Thomas', 'Claude', 'Jean'];

// Référence : 
	// const arr2 = arr;

// Copy : 3 ways
	// 1 : Slice
	// const arr2 = arr.slice();

	// 2 : Concat
	// const arr2 = [].concat(arr);

	// 3 : Spread (only ES6)
	const arr2 = [...arr];


arr.push('Marie', 'Jeanne');

console.log(arr, arr2);




// OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS

const eleve = {
	name : "Timothé",
	age : 12,
	notes : {
		fr : 14,
		math : 11
	}
}

// Réference :
// const eleve2 = eleve;

// Copy : 2 ways
	// 1 : Object.assign -> créé une copy
	// const eleve2 = Object.assign({}, eleve)
	// eleve2.name = 'Jean paul';

	// 1.5 : Object.assign -> créé une copy et assigne des valeurs
		// const eleve2 = Object.assign({}, eleve, { name : 'Jean-Luc'} );
	// ----------------------------------------------------

	// Malheureusement, le Object.assign est limité au 1er niveau de l'objet
	// -> les valeurs à n + 1 de l'objet demeurrent des références
	// ainsi, ici, on croit modifier l'eleve2 uniquement, mais que nenni
	// on modifie le modele eleve ...
	// eleve2.notes.fr = 19;

	// pour avoir une copy intégrale de l'objet, sans plus aucune référence au modele
	// on doit faire ce qu'on appelle une 'deep copy'
	// il y a des fonctions sur internet
	// mais un hack consiste à faire :

	// 2 : tricks to have deep copy
		const eleve2 = JSON.parse(JSON.stringify(eleve));
		eleve2.name = 'Moustafa';
		eleve2.notes.fr = 19;
		// Mais cette solution, parait il, n'est valable que si l'objet ne contient
		// que des variables
		// s'il y a des fonctions elles sont perdues

	// Sinon c'est faisable avec des libs :
		// Lodash 
			// const eleve2 = _.clone(eleve, true);
		// Angular
			// const eleve2 = angular.copy(eleve);
		// jQuery (à voir si c'est deep)
			// const eleve2 = $.extend(true, {}, eleve);

	// Inch'allah un de ces quatres, un ESx va sortir un
		// const eleve2 = {...eleve};
		// mais pour l'instant ca n'existe pas :(


		// en Bref : 
			// http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript


eleve2.age = 8;

console.log(eleve.name, eleve2.name);
console.log(eleve.notes, eleve2.notes);

console.log('-----');
console.log(eleve, eleve2);




