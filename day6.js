let tokens = ["BTC", "ETH", "NXPC", "SOL", "USDT"];

tokens.push("DOGE");

console.log(tokens);

function showToken(tokens) {
    console.log("目前的 token: ",tokens);
}

for (let i  = 0; i  < tokens.length; i ++) {
    console.log(tokens[i]);
}