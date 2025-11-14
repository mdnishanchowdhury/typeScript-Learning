// object Destructuring 

const user = {
    id: 123,
    name: {
        firstName: "Mezaul",
        middleName: "Abeddin",
        lastName: "Forhan"
    },
    gender: "Male",
    favouriteColor: "Black"
};

const { favouriteColor: myFavouriteColor, name: { middleName } } = user;

console.log(myFavouriteColor,middleName)

// array Destructuring 

const friends =["ikhlas","Nishan","jibon"];

const [Bestfriends ,,]= friends;

console.log(Bestfriends)