////  ARRAY ----------->
// push()

//action------> add the element at the last
//return------> new length of array

let flowers =["lily","rose","sunflower"]
let f = flowers.push("jasmine")
console.log(f)/// 4
console.log(flowers)/// ["lily","rose","sunflower","jasmine"]
////
// pop()

let b = flowers.pop()
console.log(b)///return = last removed element-----> jasmine
console.log(flowers)/// action = ['lily', 'rose', 'sunflower']

/// shift()
let vegetable = ["brinjal","tomato","potato"]
let v=vegetable.shift()
console.log(v)//// return= first element removed-------->brinjal
console.log(vegetable)///action---> [ 'tomato', 'potato' ]
/// unshift()
let names =["amol","amit","aman"]
let n=names.unshift("harshal")
console.log(n)////return=new length----> 4
console.log(names)//// action-->[ 'harshal', 'amol', 'amit', 'aman' ]
                  //add element at first


//push()= return--->new length
    // =  action--->add element at last

//unshift()=return---> new length
       //   action---> add element at first
//       
//pop() = return-----> shows last removed element
    //    action-----> removed last element
    
//shift() =return --->shows first removed element
   //      action --->removed first element
   
/////------ table---->
let car = ["Audi","BMW","Ford","Skoda"]
console.table(car)///tabular format
////------indexOf()---->
let a=car.indexOf("audi")/// -1 (sensitive language)
console.log(a)
let ab=car.indexOf("Audi")/// 0 (index)
console.log(ab)
////-------includes()----->
let ac=car.includes("BMW")////true
console.log(ac)
console.log(typeof ac)///boolean
/////------slice()-------->
let ad=car.slice(2)///[ 'Ford', 'Skoda' ]
console.log(ad)
let ae=car.slice(0)///[ 'Audi', 'BMW', 'Ford', 'Skoda' ]
console.log(ae)
let af=car.slice(1,3)///[ 'BMW', 'Ford' ]
console.log(af)
let ag=car.slice(-4,3)///[ 'Audi', 'BMW', 'Ford' ]
console.log(ag)
let ah=car.slice(-4,-2)///[ 'Audi', 'BMW' ]
console.log(ah)
let ai=car.slice(-1,-4)///   []   ----> blank string
console.log(ai)
////program 1
let birthYear = [2003,2004,2007,2008]
let currentAges= []
for(let i=0;i<birthYear.length;i++){
    let age=2021-birthYear[i]
    currentAges.push(age)
}
console.log(currentAges)////   [ 18, 17, 14, 13 ]
///program 2
let ages=[23,24,55,66,12,34]
let above25=[]
for(let i=0;i<ages.length;i++){
    if(ages[i]>25){
        above25.push(ages[i])
    }
}
console.log(above25)/////[ 55, 66, 34 ]
///program 3
let sum =[2,3,4]
let total=0
for(let i=0;i<sum.length;i++){
    total=total+sum[i]
}
console.log(total)