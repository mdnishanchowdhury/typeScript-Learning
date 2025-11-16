// Type guard using typeof and in
// in typeof

type Alphaneumeric = number | string;


const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    }
    else {
        num1.toString() + num2.toString();
    }
}

add(2, 2);
add(2, '2')
add('2', 2)

// in Guard

type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: 'Admin'
}

const getUserInfo = (user: NormalUser) => {
    if ('role' in user) {
        console.log(`This ${user.name} and his role is: ${user.role}`)
    }
    else{
          console.log(`${user.name} `)
    }

}

getUserInfo({ name: 'Normal' })