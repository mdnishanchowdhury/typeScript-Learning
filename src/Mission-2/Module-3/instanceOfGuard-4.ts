// Type guard using instance of

class Person {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    getSleep(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} ghumai`)
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }

    doStudy(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours}`)
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name)
    }
    takeClass(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours}se class nai`)
    }
}

// function guard
const isStudent=(user:Person)=>{
    return user instanceof Student; //user is student
}
const isTeacher=(user:Person)=>{
    return user instanceof Teacher; //user is teacher
}

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10);
    }
    else if (isTeacher(user)) {
        user.takeClass(5)
    }
    else {
        user.getSleep(15)
    }
}

const student1 = new Student("MR.student");
const teacher2 = new Teacher('Mr teacher');

getUserInfo(student1);
getUserInfo(teacher2);