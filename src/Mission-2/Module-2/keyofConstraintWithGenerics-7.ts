// keyof constraint with generics

// keyof : type operation

type RichPeoplesVehicle = {
    car: string,
    bike: string,
    cng: string
}

type myvehicle1 = "bike" | "car" | "cng";
type myvehicle2 = keyof RichPeoplesVehicle;

const myvehicle: myvehicle2 = "bike"
type User = {
    id: number;
    name: string;
    address: {
        city: string
    }
}
const user = {
    id: 222,
    name: "Nishan",
    address: {
        city: "Dhaka"
    }
}
const myName = user.name;
const myId = user["id"];
const myaddress = user["address"];

// console.log(myName)
// console.log(myId)
// console.log(myaddress)

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key]
}

const result1 = getPropertyFromObj(user, "name");

const product ={
    brand:"Hp"
}

const result2 = getPropertyFromObj(product,"brand");

console.log(result2)