let wallet = {
    name: "Alice",
    USDT: 1000
};

function deposit(wallet, amount) {
    wallet.USDT += amount;

    return wallet.USDT;
}

let result = deposit(wallet, 500);

function withdraw(wallet, amount1) {

    if (wallet.USDT >= amount1) {
        wallet.USDT -= amount1;
        return "提款成功";
    } else {
        return "餘額不足";
    }
}


let result1 = withdraw(wallet, 300);

console.log(result);
console.log(result1);
console.log(wallet);