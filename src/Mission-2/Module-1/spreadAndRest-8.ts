// spread operator

const friends = ["jibon", "sagor"]

const schoolFriens = ["Rurim", "Kurim", "bulbol"];

const collageFriends = ["Ikhlas", "Sagor", "Bifol"];

friends.push(...schoolFriens);  //...spread operator

// console.log(friends)

const user = { name: "NIshan", phone: "0130000000" };

const others = { hobby: "outing", fevouriteColor: "Black" };

const userInfo = { ...user, ...others };

// console.log(userInfo)

const sendInvite = (...list: string[]) => {
    list.forEach((listName) => console.log(listName))  //forEach --> for()
}

sendInvite("Ikhlas", "Sagor", "Bifol")