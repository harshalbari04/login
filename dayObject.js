// let person={
//     firstName:"harshal",
//     lastName:"bari",
//     rollNo:122204,
//     age:27
// }

// ///retrive---->with . notation

// console.log(person.firstName)///harshal
// console.log(person.rollNo)///122204
// /////retrive---->with [bracket] notation

// console.log(person['firstName'])///harshal
// console.log(person['rollNo'])///122204


//----------------------------->

// ////update---->with . notaion

// person.firstName="saurabh"
// console.log(person)///{ firstName: 'saurabh', lastName: 'bari', rollNo: 122204, age: 27 }

// ////update---->with [bracket] notaion
// person['firstName']="saurabh"
// console.log(person)///{ firstName: 'saurabh', lastName: 'bari', rollNo: 122204, age: 27 }

//---------------------------->

// ///add

// person.language="marathi"/// . notation
// person['skill']="cypress"/// [bracket] notation
// console.log(person)

//---------------------------->

// ///delete
// delete person.age
// console.log(person)
// delete person['skill']
// console.log(person)

//------------------------->

// sort-->

// let names = ["apple","chicku","banana"]
// let avb = names.sort()
// console.log(avb)//[ 'apple', 'banana', 'chicku' ]///alphabatically sorting

// let nu = [22,44,33,11,333,111]
// let un = nu.sort()
// console.log(un)//[ 11, 111, 22, 33, 333, 44 ]//1-2-3 sorting

//-------------->

// flat-->

let array = [[1,2,3,],[4,5,6],[7,8,9]]
let ar = array.flat()
console.log(ar)//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array[0][1])//2
console.log(array[2][2])//9

// let array2 = [[1,2,3],[7,8,9],[4,5,6]]
// let ar2 = array.flat()
// console.log(ar2)//[1, 2, 3, 4, 5, 6, 7, 8, 9]





















// ////fill-----
// let qwe=[1,2,3,4,5,6,7]
// let wwe=qwe.fill("harshal",-3)
// console.log(wwe)///[ 1, 2, 3, 4, 'harshal', 'harshal', 'harshal' ]
// console.log(qwe)///[ 1, 2, 3, 4, 'harshal', 'harshal', 'harshal' ]
// let qww=[1,2,3,4,5,6,7]
// let rrr=qww.fill("saurabh",2,5)///last position ;5 not included
// console.log(rrr)///[ 1, 2, 'saurabh', 'saurabh', 'saurabh', 6, 7 ]


// ////splice-----
// let ttt= [11,22,33,55,66,88]
// let yyy=ttt.splice(1,2,"harshal","bari")///(startposition,numberofelement,re,re)
// console.log(yyy)///[ 22, 33 ]
// console.log(ttt)///[ 11, 'harshal', 'bari', 55, 66, 88 ]



// //////
// let car = {
//     color: "red",
//     type:'SUV',
//     regNo:25
// }
// for(let key in car){
//     console.log(key,car[key])
// }

// ////
// let arr=[11,22,33]
// let arr2=arr
// arr[0]=25
// arr2[1]=30
// console.log(arr)///[ 25, 30, 33 ]
// console.log(arr2)///[ 25, 30, 33 ]
// ////
// let h=[11,22,33,44,22,11]
// console.log(h)///[ 11, 22, 33, 44, 22, 11 ]...array stores duplicate values
// ///
// let hhh ={
//     fullName:"harshal bari",
//     age:27,
//     age:28
// }
// console.log(hhh)///{ fullName: 'harshal bari', age: 28 }   object does not stores value by index
// /////////
/////////
/////////function as parameter to another function




//////array as a parameter to another function

// let numbers =[11,22,33,55,66,77]
// function addArrayElements(arr){
//     let arr = [11,22,33,55,66,77]
//     let total =
//     arr.reduce(function(acc,el){
//         return acc + el
//     })
//     re
// }










