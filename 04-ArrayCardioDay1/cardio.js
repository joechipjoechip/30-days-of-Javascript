
        const inventors = [
	      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
	    ];

    	const people = ['Adadgio, Clement', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 
    	'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Zaratoustra, Jean-luc', 'Begin, Menachem', 
    	'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 
    	'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 
    	'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 
    	'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 
    	'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 
    	'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 
    	'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 
    	'Blair, Tony', 'Blake, William'];

	    // Array.prototype.filter()
	    // 1. Filter the list of inventors for those who were born in the 1500's

	    function born1500(arr){
	    	return arr.filter(element => {
				return (element.year >= 1500 && element.year <= 1600) ? element: null;
	    	});
	    };
	    //console.log(born1500(inventors));

	    // plus court :
	    const bornVar = inventors.filter(element => element.year >= 1500 && element.year <= 1600 ? element: null);
	    //console.log(bornVar);

	    

	    // Array.prototype.map()
	    // 2. Give us an array of the inventors' first and last names
	    function firstLast(arr){
	    	return arr.map(element => {
	    		return "" + element['first'] + " - " + element['last'];
	    	});
	    };
	    //console.log(firstLast(inventors));


	    // Array.prototype.sort()
	    // 3. Sort the inventors by birthdate, oldest to youngest
	    function sortThem(arr){
	    	return arr.sort((a, b) => a.year > b.year ? 1 : -1);
	    }
	    // console.log(sortThem(inventors));

	    //plus court :
	    const sortThemLine = inventors.sort( (a,b) => a.year > b.year ? 1 : -1);
	    //console.log(sortThemLine);
	    


	    //console.log(sortThem(inventors));

	    // Array.prototype.reduce()
	    // 4. How many years did all the inventors live?
	    function CumulAge(arr){
	    	return arr.reduce((acc, element) => acc + (element.passed - element.year), 0);
	    };
	    //console.log(CumulAge(inventors));

	    // 5. Sort the inventors by years lived
	    function sortAge(arr){
	    	return arr
	    	.map(element => [element, element.passed - element.year])
	    	.sort((a,b) => a[1] > b[1] ? 1 : -1 );
	    };
	    //console.log(sortAge(inventors));

	    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
	    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
	    const bds = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", 
	    "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", 
	    "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", 
	    "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", 
	    "Boulevard du Crime", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", 
	    "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Montmartre", "Boulevard du Montparnasse", 
	    "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard de Rochechouart", "Boulevard Saint-Germain", 
	    "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", 
	    "Boulevard Voltaire", "Boulevard de la Zone"];

	    function bdDe(arr){
	    	return arr.filter(element => {
	    		return element.match(/\sde\s/gi) ? element : null;
	    	});
	    };
	    //console.log(bdDe(bds));


	    // 7. sort Exercise
	    // Sort the people alphabetically by last name
	    function sortLast(arr){
	    	return arr.sort((a, b) => {
	    		const [aLast, aFirst] = a.split(', ');
	    		const [bLast, bFirst] = a.split(', ');
	    		return alast > blast ? 1 : -1;
	    	});
	    };
	    //console.log(sortLast(inventors));
	    const sortPeople = people.sort((a,b)=> a > b ? 1 : -1);
	    //console.log(sortPeople);

	    // 8. Reduce Exercise
	    // Sum up the instances of each of these
	    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

	    function sumInst(arr){
	    	// const refs = {};

	    	// arr.map(element =>{
	    	// 	if(!Object.keys(refs).includes(element))
	    	// 		refs[element] = 1;
	    	// 	else(refs[element] += 1)
	    	// });
	    	// return refs;
	    	return arr.reduce((acc, element)=>{
	    		if(!acc[element])
	    			acc[element] = 0
	    		acc[element]++;
	    		return acc;
	    	}, {});
	    };
	    console.log(sumInst(data));






