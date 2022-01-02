// setting the property of class object

// 1) setting the object values outside the class

//class name shoud always starts with CAPITAL letters

class Person {
fullName = undefined
roll = undefined
age = undefined
} 

let amol = new Person()

amol.fullName ="amol rao"
amol.age = 23
amol.roll = 45
amol.skill ="cypress"

console.log(amol)//Person { fullName: 'amol rao', roll: 45, age: 23, skill: 'cypress' }

// every object have different property values

// 2) setting the object values at the time of creation

class Person2 {
    constructor(fn,ag,rn){
        this.fullName = fn
        this.age = ag
        this.roll = rn
    }
}
let amol2 =new Person2 ("amol bari",23,47)
let pooja = new Person2 ("pooja ",21,45)
console.log(amol2)//Person2 { fullName: 'amol bari', age: 23, roll: 47 }
console.log(pooja)

// 3) set method
class Person3 {
    setAge(a){
        this.age = a
    }
    setFullName(fn){
        this.fullName =fn
    }
    setRollNo(rn){
        this.rollNo= rn
    }
}
let harshal = new Person3
harshal.setAge(27)
harshal.setFullName("harshal bari")
harshal.setRollNo(122204)
console.log(harshal)//Person3 { age: 27, fullName: 'harshal bari', rollNo: 122204 }


///////// class Bank 
class Bank {
    constructor(fn,accn,bal){
        this.fullName = fn
        this.accNumber = accn
        this.bal = bal
        this.transaction = []
    }
    deposite(amount){
        this.transaction.push(amount)
        this.bal = this.bal + amount
        console.log('the current bal is ${this bal}')
        return this.bal
    }
    withDrawl(amount){
        if (this.bal > amount){
            this.transaction.push(-amount)
            this.bal= this.bal - amount
            console.log('this cuurent bal is ${this.bal}')
            return this.bal
        }
        else{
            console.log('insufficient funds')
        }
    }
}
let harshalb = new Bank ("harshalbari",123,10000000)
harshalb.deposite(10000000)
harshalb.withDrawl(10000000)
console.log(harshalb)///Bank {
//                         fullName: 'harshalbari',
//                         accNumber: 123,
//                         bal: 10000000,
//                         transaction: [ 10000000, -10000000 ]
//                        }