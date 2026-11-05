let wallets = [
    { name: "Alice", USDT: 1000 },
    { name: "Bob", USDT: 300 },
    { name: "Charlie", USDT: 800 },
    { name: "David", USDT: 100 },
];

let balances = wallets.map(wallet => wallet.name);
let result = wallets.filter(wallet => wallet.USDT>500);
let richWallets = wallets.find(wallet => wallet.USDT>500);

console.log(balances);
console.log(result);
console.log(richWallets);
