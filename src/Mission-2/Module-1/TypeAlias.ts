// Type Alias 

type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: "male" | "female",
    contact: string
    address: {
        divison: string,
        city: string
    }
}


const user1: User = {
    //     id: number,
    //     name: {
    //         firstName: string,
    //         lastName: string
    //     },
    //     gender: "male" | "female",
    //     contact: string
    //     address: {
    //         divison: string,
    //         city: string
    //     }
    // } = {


    id: 123,
    name: {
        firstName: "Nishan",
        lastName: "Chowdhury",
    },
    gender: "male",
    contact: "02493",
    address: {
        divison: "dhaka",
        city: "Dhaka"
    }
}

const user2: User = {
    id: 123,
    name: {
        firstName: "ikhlas",
        lastName: "uddin",
    },
    gender: "male",
    contact: "032432",
    address: {
        divison: "Rajshahi",
        city: "Rajshahi"
    }
}

type IsAdmin = true
const isAdmin: IsAdmin = true;

// function khetre type alias

type AddFun = (num1: number, num2: number) => number;
const add: AddFun = (num1, num2) => num1 + num2;