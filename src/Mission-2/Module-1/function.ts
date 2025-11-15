// function
// arrow function , normal function

function addNormal(num1: number, num2: number) {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;
// object => function => method

const poorUser = { //poorUser --> Object function
    name: "Nishan",
    balance: 0,

    addBalance(newBalance: number): number {
        const totalBalance = this.balance + newBalance;
        return totalBalance;
    }
}

poorUser.addBalance(30);

const arr: number[] = [1, 2, 3, 4]
const sqrArray = arr.map((elem: number): number => elem * elem)

