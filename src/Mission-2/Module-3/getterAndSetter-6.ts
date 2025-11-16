// Getter and Setter

class BankAccount {
    public readonly userId: number;
    public userName: string;
    // private userBalance: number;
    protected userBalance: number;
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    // addBalance(balance: number) {
    //     this.userBalance = this.userBalance + balance;
    // }

    // setter
    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }
    // getter
    get getBalance() {
        return this.userBalance
    }


    // get
    // getBalance(){
    //     return this.userBalance;
    // }
}


const nishanAccount = new BankAccount(222, "Nishan", 20)

// nishanAccount.addBalance(200)
// console.log(nishanAccount.getBalance())

nishanAccount.addBalance =100;
console.log(nishanAccount)