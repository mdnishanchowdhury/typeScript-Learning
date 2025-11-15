//dynamically Generics 

type GenericArray<T> = Array<T>

// const friends: string[] = ['ikhlas', 'jibon', 'hasan'];

const friends: GenericArray<string> = ['ikhlas', 'jibon', 'hasan'];

const rollNumber: Array<number> = [4, 3, 11];

const isEligibleList: Array<boolean> = [true, false, true];


const sqfFunc = (value: number) => {
    return value * value;
}
sqfFunc(4)

type Coodinates<T, J> = [T, J];
const coordinates1: Coodinates<number, number> = [20, 30];
const coordinates2: Coodinates<string, string> = ['20', '30'];

// Generics with alias
type User = { name: string, age: number }

const userList: GenericArray<User> = [
    {
        name: 'ikhlas',
        age: 22,
    },
    {
        name: "nishan",
        age: 23
    }
]

// Generics with interface

interface Developer<T, X = null> {
    name: string,
    salary: number,
    device: {
        brand: string,
        model: string,
        releasedYear: string
    };
    smartWatch: T;
    bike?: X
}

interface WithoutBrand {
    heartRate: string;
    stopWatch: boolean;
}

interface Brand {
    heartRate: string;
    calling: boolean,
    calculator: boolean,
    aiFeature: boolean
}

const poorDeveloper: Developer<WithoutBrand, { brand: 'yamaha', engineCapacity: "200cc" }> = {
    name: "Nishan",
    salary: 30,
    device: {
        brand: "Dell",
        model: "inspiron",
        releasedYear: "2020"
    },
    smartWatch: {
        heartRate: "100",
        stopWatch: true
    }
}

// rich

const richDeveloper: Developer<Brand> = {
    name: "Nishan",
    salary: 30,
    device: {
        brand: "Hp",
        model: "inspiron",
        releasedYear: "2020"
    },
    smartWatch: {
        heartRate: "100",
        calling: true,
        calculator: true,
        aiFeature: true
    },
    bike: null
}