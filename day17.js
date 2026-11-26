class Wallet {

    constructor(name, balance) {
        this.name = name;
        this.USDT = balance;
    }

    deposit(amount) {
        this.USDT += amount;
        return this.USDT;
    }

    withdraw(amount) {
        if (this.USDT >= amount) {
            this.USDT -= amount;
            return "提款成功";
        } else {
            return "餘額不足";
        }
    }
}

let wallet1 = new Wallet("Alice", 1000);
let wallet2 = new Wallet("Bob", 3000);

console.log(wallet1.deposit(500));
console.log(wallet1.withdraw(200));
console.log(wallet2.deposit(1000));
console.log(wallet2.withdraw(500));
console.log(wallet1);
console.log(wallet2);

