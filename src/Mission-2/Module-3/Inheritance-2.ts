// Inheritance, the 1st pilar of OOP

class Parent {
    name: string;
    age: number;
    address: string
    constructor(name: string, age: number, address: string) {
        this.name = name,
            this.age = age;
        this.address = address;
    }

    getSleep(hours: number) {
        console.log(`${this.name} Eni ato ghonta ghumai ${hours} hours`)
    }
}


class Student extends Parent {

}

const student1 = new Student("Nishan", 22)

student1.getSleep(15);

// techear

class Teacher extends Parent {

    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }

    getSleep(hours: number) {
        console.log(`${this.name} Eni ato ghonta ghumai ${hours} hours`)
    }
    takeClass(numOfHoursClass: number) {
        console.log(`${this.name} ${numOfHoursClass} ato ghonta class nai`)
    }
}

const teacher1 = new Teacher("jahid", 22, "dhaka", "senior teacher")

teacher1.takeClass(16);