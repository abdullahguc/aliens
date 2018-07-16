const NUM_CONTACTS = 20;

const Names = [
  'Daron Malakian',
  'Serj Tankian',
  'Shavo Odadjian',
  'John Dolmayan',
  'Chris Cornel',
  'Tom Morello',
  'Zack de la Rocha,',
  'Hayley Williams',
  'Winston Smith',
  'Tyler Durden',
  'Lilly Allen',
  'Breaking Benjamin',
  'Brandon Boyd',
  'Johnny Greenwood',
  'Thome Yorke',
  'William Harper',
  'Amelia Zizo'
];

const Description = [
 	'soad',
 	'am',
 	'pm',
	'rh',
	'soad',
	'ic',
	'qotsa',
	'Cranberries',
	'CTE',
	'AM',
	'PM',
	'RCHP',
	'DT',
	'TI',
	'KP',
	'BB',
	'PP',
	'IC'
];

// generate a random number between min and max
const rand = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// generate a name
function generateName()
{
	return Names[rand(0, 18)];
}

// generate a phone number
function generateBand()
{
	return Description[rand(0, 18)];
}
// create a person
const createContact = () => ({
  Name: generateName(),
  Description: generateBand(),
  Image: 'aliens.png'
});

// compare two contacts for alphabetizing
const compareNames = (contact1, contact2) =>
  contact1.name > contact2.name;

// add keys to based on index/
const addKeys = (val, key) => ({ key, ...val });


// create an array of length NUM_CONTACTS and add keys
export default Array.from({ length: NUM_CONTACTS }, createContact).map(addKeys);
