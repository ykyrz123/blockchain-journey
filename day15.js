let wallet ={
    name: "Alice",
    USDT: 1000,
    address: "0x123456"
}

wallet.ETH = 2;
wallet.BTC = 0.4567;

console.log(wallet.ETH);
console.log(wallet.BTC);
console.log(wallet);
console.log(wallet.name);
console.log(wallet.USDT);

delete wallet.BTC;
console.log(wallet.BTC);

let wallets = {
    name: "Alice",
    USDT: 1000
};
//修改餘額
wallets.USDT = 1500;

//新增ETH
wallets.ETH = 2;

//新增BTC
wallets.BTC =0.23141;

//刪除ETH
delete wallets.ETH;

console.log(wallets);
