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

const userList: GenericArray<{ name: string, age: number }> = [
    {
        name: 'ikhlas',
        age: 22,
    },
    {
        name: "nishan",
        age: 23
    }
]