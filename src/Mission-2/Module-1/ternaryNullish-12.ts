// ? : ternary operator : decision marking
// ?? : nullish coalescing operation
// ?. operation chaining


const userAge = 21
const aligible = (age: number) => {
    // if (age >= 21) {
    //     console.log("You are aligible")
    // }
    // else {
    //     console.log("you are not aligible")
    // }

    const result = age > + 21 ? "you are aligible" : "you are not aligible"
    console.log(result)
}

// aligible(22);

// ?? : nullish coalescing operation "undefined and null workign"
const userThem = undefined;
const selectedThem = userThem ?? "light"

// console.log(selectedThem)

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest"

const resultWithNulish = isAuthenticated ?? "you are guest"
 console.log({resultWithNulish} ,{resultWithTernary})

// ?. operation chaining
const user:{
    address:{
        city:string,
        town:string,
        postCode?:string
    }
} = {
    address:{
        city:'dhaka',
        town: "banani",
    }
}

const postCode = user?.address?.postCode;

console.log(postCode)