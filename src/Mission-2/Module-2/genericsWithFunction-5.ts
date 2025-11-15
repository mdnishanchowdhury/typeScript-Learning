// Generics with function

// const createArrayWithString = (value: string) => [value]

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: {
//     id: number;
//     name: string
// }) => {
//     return [value];
// };


const createArrayWithGeneric = <T>(value: T) => {
    return [value]
}

const arrString = createArrayWithGeneric('apple');
const arrNumber = createArrayWithGeneric(221);
const arrObj = createArrayWithGeneric({
    id: 221,
    name: "nishan"
});

// tuple


const createArrayWithTuple = (param1: string, param2: number) => [
    param1,
    param2
];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2]

const res1 = createArrayTupleWithGeneric("Nishan", false)
const res2 = createArrayTupleWithGeneric(22, { name: "Name" })

const addStudentToCouse =<T>(studentInfo:T)=>{
    return {
        couse:"Next Level",
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

const result = addStudentToCouse(student1);
console.log(result)