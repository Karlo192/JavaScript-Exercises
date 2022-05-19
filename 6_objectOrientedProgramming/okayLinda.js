
// let profile = {
//     firstname: 'Karlo',
//     lastname: 'Poslek',
//     sayName: function() {
//         return "The name of this person is " + this.firstname + ".";
//     }
// };

// console.log(profile.firstname);
// console.log(profile.lastname);
// console.log(profile.sayName());



function Dog(name, colour) {
    this.name = name,
    this.colour = colour,
    this.numLegs = 4;
};

let germanShepherd = new Dog('Rex', 'brown');
let husky = new Dog('Winter', 'grey');

Dog.prototype.numNoses = 1;

console.log(germanShepherd);
console.log(husky);

let boolean = husky instanceof Dog;
console.log(boolean);