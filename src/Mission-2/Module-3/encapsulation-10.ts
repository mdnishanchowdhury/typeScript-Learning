// Encapsulation, the 4th pillar of OOP
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
    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }
}

// class StudentBankAccount extends BankAccount{
//     test(){
// this.userBalance 
//     }
// }

const nishanAccount = new BankAccount(222, "Nishan", 20)

nishanAccount.addBalance(200)
console.log(nishanAccount)