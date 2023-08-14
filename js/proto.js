let car = {
    engine: true,
    color: 'black'
};

let BMW = {};

console.log(c);
console.log(b);


let b = 10;
const Text = 'Text1';
var c = true;
c = false;

let obj = null;

console.log(typeof(null));

console.log(b, Text, c);

function myFunc(x = 10) {
    return x * x;
}

console.log(myFunc());
  

var arr = [10, 20, 30];
arr[5] = 50;
console.log(arr.length);
console.log(arr);

var person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};


const {address} = person;
const {city} = address;

console.log(city);

console.log(address.city);


console.log(person['address']['city']);


const Audi = {
    models: {
        carBodyTypeOne: 'A1',
        carBodyTypeTwo: 'A2',
        carBodyTypeThree: 'A3',
        carBodyTypeFour: 'A4',
    },
    engines: {
        engineTypeOne: "DVS",
        engineTypeTwo: "Electro"
    }
};

const {models, engines} = Audi;
const {carBodyTypeOne, carBodyTypeTwo, carBodyTypeThree, carBodyTypeFour} = models;
const {engineTypeOne, engineTypeTwo} = engines;

console.log(carBodyTypeTwo);
console.log(engineTypeTwo);
console.log(models);
console.log(engines);
