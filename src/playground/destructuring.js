//
// Object Destructing
//
/*const person = {
    name : 'Pranjal',
    age : '23',
    location : {
        city : 'Delhi',
        temp : '28'
    }
}
const {name, age} = person;
console.log(`${name} is ${age} years old.`);

const {city, temp: temperature} = person.location;
if(city && temperature){
    console.log(`It is ${temperature} in ${city}.`);
}
*/

const book = {
    title : 'Mathematics',
    author : 'RD Sharma',
    publisher: {
        name: 'penguin'
    }
}

const {name : publisherName = 'self-published'} = book.publisher;
if(publisherName){
    console.log(`This Book is published by ${publisherName}`);
}

//
// Array Destructing
//

/*const address = ['c-1/160', 'Sanjay Enclave', 'Uttam Nagar', 'New Delhi', '110059'];

const [houseno,street,area,city,zip] = address;

console.log(`My address is ${houseno}, ${street}, ${area}, ${city}, ${zip}`);*/

const item = ['coffee(hot)', '60', '80', '100'];
const [coffee, , medium, ] = item;
console.log(`your ${coffee} is  rs ${medium}`);