// Type Interface
type User = {
    name: string,
    age: number
}

// interface object type: array,object,function
interface IUser {
    name: string,
    age: number
}

type Role = {
    role: "admin" | "üser"
}

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
    role: "admin" | "user"
}

const user1: IUserWithRole = {
    name: "Nishan",
    age: 22,
    role: "admin"
}
const user2: IUser = {
    name: "Ikhlas",
    age: 23
}

type IsAdmin = boolean;

const isAdmin: IsAdmin = false

// function
type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number
}

const add: IAdd = (num1, num2) => num1 + num2

type Friend = string[]

interface IFriend {
    [index: number]: string
}

const friends: IFriend = ['A', 'B', 'C'];