// Type Assertion
let anything: any;

anything = 224;

// (anything as number)

const kgToGm = (input: string | number | undefined) => {

    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ")
        return `Converted output is: ${Number(value) * 1000}`
    }
}

const result = kgToGm(2) as number;
const result1 = kgToGm('2 Kg')

console.log(result)
console.log(result1)

type CustomError = {
    message: string
}

try {

} catch (error) {
    console.log((error as CustomError).message)
}