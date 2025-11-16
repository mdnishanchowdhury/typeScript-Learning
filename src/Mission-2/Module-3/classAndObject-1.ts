// Class and object
// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name
//         this.species = species
//         this.sound = sound
//     }
//     // method
//     makeSound(){
//         console.log(`${this.name} is making sound ${this.sound}`)
//     }
// }

// paramiter propertics
class Animal {
    // name: string;
    // species: string;
    // sound: string;

    constructor(public name: string,public species: string,public sound: string) {
        // this.name = name
        // this.species = species
        // this.sound = sound
    }
    // method
    makeSound(){
        console.log(`${this.name} is making sound ${this.sound}`)
    }
}

const dog = new Animal("dogesh bhai", "dog", "ghow ghow");

dog.makeSound();