let users =[
    {
        name:"Ethanyuan",
        age: 27,
        USDT:1000,

    },
    {
        name: "Alice",
        age: 30,
        USDT: 2000,
    },
    {
        name: "Bob",
        age: 22,
        USDT: 300,
    }
];

for (let i = 0; i < users.length; i++) {
    if (users[i].USDT >=2000) {
        console.log(users[i].name,"的 USDT：",users[i].USDT,"VIP+");
    }   else if (users[i].USDT >=1000) {
        console.log(users[i].name,"的 USDT：",users[i].USDT,"VIP");
    } else {
        console.log(users[i].name,"的 USDT：",users[i].USDT,"一般會員");
    };
    
};

console.log("Day10： I am learning Git!");
