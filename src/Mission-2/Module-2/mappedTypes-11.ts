// Explore mapped types
// map

const arrayOfNum: number[] = [1, 4, 6];
const arrayOfString: string[] = ["1", "4", "6"];

const arrayStringUsingMáp: string[] = arrayOfNum.map((num) => num.toString())
console.log(arrayStringUsingMáp)

const user = {
    id: 123
}

type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum["height"]

// type AreaOfString = {
//     height: string;
//     width: string;
// }

type Area<T> = {
    [key in keyof T]: T[key];
}

const Area1: Area<{ height: string; width: boolean }> = {
    height: "40",
    width: false,
}
