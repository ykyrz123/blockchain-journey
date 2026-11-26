class Wallet {
    constructor(name, balance) {
        this.name = name;
        this.USDT = balance;
    }

    deposit(amount) {
        this.USDT += amount;
    }
}

class VIPWallet extends Wallet {
    constructor(name, balance, vipLevel) {
        super(name, balance);
        this.VIPLevel = vipLevel;
    }

    vipDeposit(amount) {

        let bonusRate;

        if (this.VIPLevel === 1) {
            bonusRate = 0.05;
        } else if (this.VIPLevel === 2) {
            bonusRate = 0.10;
        } else if (this.VIPLevel === 3) {
            bonusRate = 0.15;
        } else {
            bonusRate = 0;
        }

        let bonus = amount * bonusRate;

        this.USDT += amount + bonus;

        return this.USDT;
    }
}

let Charlie = new VIPWallet("Charlie", 3000, 1);
let Bob = new VIPWallet("Bob", 5000, 2);
let Alice = new VIPWallet("Alice", 10000, 3);

Alice.vipDeposit(4000);
Bob.vipDeposit(2000);
Charlie.vipDeposit(1000);

console.log(Alice);
console.log(Bob);
console.log(Charlie);