/*

# Inheritance

![Inheritance](./inheritance.png)

Use the above image and implement the Inheritance using all three pattern

1. Factory pattern
2. Pseudoclassical Pattern
3. Classes

*/

// FACTORY PATTERN //

// user
let userMethods0 = {
    increaseScore: function(){
        this.score++;
    },
};

function createUser0(name, score){
    let userObj = Object.create(userMethods0);
    userObj.name = name;
    userObj.score = score;
    return userObj;
}

// moderator
let moderatorMethods0 = {
    sharePublicMessage: function(){
        console.log("Moderator: Welcome!");
    },
};

function moderator0(name, score){
    let modObj = createUser0(name, score);
    Object.setPrototypeOf(modObj, moderatorMethods0);
    Object.setPrototypeOf(moderatorMethods0, userMethods0);
    return modObj;
}

// paid user
let paidMethods0 = {
    increaseBalance: function(){
        this.accBal++;
    },
};

function createPaidUser0(name, score){
    let paidUserObj = createUser0(name, score);
    paidUserObj.score = 5;
    paidUserObj.accBal = 0;
    Object.setPrototypeOf(paidUserObj, paidMethods0);
    Object.setPrototypeOf(paidMethods0, userMethods0);
    return paidUserObj;
}

// instances
let user01 = createUser0("Will", 3);
let user02 = createUser0("Tim", 5);
let user03 = createUser0("Eva", 9);
let mod0 = moderator0("mod", 0);
let paidUser0 = createPaidUser0("Alyssa", 8);
user01.increaseScore();
mod0.sharePublicMessage();
paidUser0.increaseBalance();
console.log(user01);
console.log(user02);
console.log(user03);
console.log(mod0);
console.log(paidUser0);

// PSEUDOCLASSICAL PATTERN //

// user
function User1(name, score){
    this.name = name;
    this.score = score;
}

User1.prototype.increaseScore = function(){
    this.score++;
};

// moderator
function Moderator1(name, score){
    User1.call(this, name, score);
}

Moderator1.prototype.sharePublicMessage = function(){
    console.log("Moderator: Welcome!");
};

// paid user
function PaidUser1(name, score){
    User1.call(this, name, score);
    this.score = 5;
    this.accBal = 0;
}

PaidUser1.prototype.increaseBalance = function(){
    this.accBal++;
};

// instances
let user11 = new User1("Will", 3);
let user12 = new User1("Tim", 5);
let user13 = new User1("Eva", 9);
let mod1 = new Moderator1("mod", 0);
let paidUser1 = new PaidUser1("Alyssa", 8);
user11.increaseScore();
mod1.sharePublicMessage();
paidUser1.increaseBalance();
console.log(user11);
console.log(user12);
console.log(user13);
console.log(mod1);
console.log(paidUser1);

// CLASSES //

// user
class User2{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    increaseScore(){
        this.score++;
    }
}

// moderator
class Moderator2 extends User2{
    constructor(name, score){
        super(name, score);
    }
    sharePublicMessage(){
        console.log("Moderator: Welcome!");
    }
}

// paid user
class PaidUser2 extends User2{
    constructor(name, score){
        super(name, score);
        this.score = 5;
        this.accBal = 0;
    }
    increaseBalance(){
        this.accBal++;
    }
}

// instances
let user21 = new User2("Will", 3);
let user22 = new User2("Tim", 5);
let user23 = new User2("Eva", 9);
let mod2 = new Moderator2("mod", 0);
let paidUser2 = new PaidUser2("Alyssa", 8);
user21.increaseScore();
mod2.sharePublicMessage();
paidUser2.increaseBalance();
console.log(user21);
console.log(user22);
console.log(user23);
console.log(mod2);
console.log(paidUser2);
