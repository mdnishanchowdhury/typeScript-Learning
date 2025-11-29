// reference type object
const user: {
    firstName: string;
    middleName?: string, //optional type
    lastName: string,
    isMarried: boolean,
    bsc: "cse" //literal type
    readonly scl:string; //accces modifier
} = {
    firstName: "Nishan",
    lastName: "Chowdhury",
    isMarried: false,
    bsc: "cse",
    scl:"Alalapur high school"
}
user.firstName = "Md Nishan";
console.log(user);