// Constraint in typescript
// constraint : strict rules deya

type Studentinfo = {
    id: number, name: string
}

const addStudentToCouse = <T extends Studentinfo>(studentInfo: T) => {
    return {
        couse: "Next Level",
        ...studentInfo
    }
}

const student1 = {
    id: 123,
    name: "Nishan",
    hesPen: true
}

const student2 = {
    id: 1234,
    name: "Ikhlas",
    hesCar: true,
    isMarried: true
}
const student3 = {
    id: 123,
    name: 'nishan',
    hasWatch: true
}

const result = addStudentToCouse(student3);
console.log(result)
