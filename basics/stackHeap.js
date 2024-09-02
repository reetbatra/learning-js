// stack (primitive), heap (non-primitive)

let name = "reet"
let anotherName = "batra"

anotherName= "code"
console.log(name);
console.log(anotherName);

userOne = {
    email: 'reetbatra@gmail.com',
    upi: 'fedef@oksbi'
}

let userTwo = userOne
userTwo.email = 'user@gmail.com'

console.log(userOne.email);
console.log(userTwo.email);
