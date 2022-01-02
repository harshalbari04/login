// let ram = {
//     fullName : "ram sharma",
//     age : 29,
//     skills: ["java","python"],
//     rollNo:45
// }
// console.log(ram)

// newPerson = {
//     fullName : undefined,
//     age : undefined,
//     skills: undefined,
//     rollNo:undefined

// }
// let ram2 = newPerson()
// ram2.age = 33
// ram2.skills = ["cricket","tennis"]
// ram2.rollNo = 47
// ram2.fullName = "ram rao"
// console.log(ram2)
////----------->

let students = [
    {
        fullName: "chinmay deshpande",
        age: 22,
        rollNo:23,
        skills:["javascript","cpp"],
        city: "pune"
    },
    {
        fullName: "amol rao",
        age: 27,
        rollNo:24,
        skills:["javascript","cpp","python","java"],
        city: "nagpur"
        
    },
    {
        fullName: "poorva vyas",
        age: 30,
        rollNo:25,
        skills:["javascript","cpp","java"],
        city: "nasik"
    },
    {
        fullName: "avinash vaidhya",
        age: 30,
        rollNo:26,
        skills:["javascript","cpp","java","python"],
        city: "pune"
    },
    {
        fullName: "amol ra",
        age: 35,
        rollNo:27,
        skills:["javascript","cpp","python","java"],
        city: "banglore"
    }
]
// program 1)   skils of person whos name starts with 'a'
// let a = students.filter(function(el){
//     return el.fullName[0]==="a" || el.fullName[0]==="A"
// }) 
// a.forEach(element => {
//     console.log('${element.fullName}:${element.skills}')
    
// });
// console.log(a)

// program 2) add username as amol rao-----> ar
// students.forEach(function(el){
//     el.username = el.fullName.split('')[0][0]+el.fullName.split('')[1][0]
// })
// console.log(students)///////
//[
//     {
//       fullName: 'chinmay deshpande',
//       age: 22,
//       rollNo: 23,
//       skills: [ 'javascript', 'cpp' ],
//       city: 'pune',
//       username: 'ch'
//     },
//     {
//       fullName: 'amol rao',
//       age: 27,
//       rollNo: 24,
//       skills: [ 'javascript', 'cpp', 'python', 'java' ],
//       city: 'nagpur',
//       username: 'am'
//     },
//     {
//       fullName: 'poorva vyas',
//       age: 30,
//       rollNo: 25,
//       skills: [ 'javascript', 'cpp', 'java' ],
//       city: 'nasik',
//       username: 'po'
//     },
//     {
//       fullName: 'avinash vaidhya',
//       age: 30,
//       rollNo: 26,
//       skills: [ 'javascript', 'cpp', 'java', 'python' ],
//       city: 'pune',
//       username: 'av'
//     },
//     {
//       fullName: 'amol ra',
//       age: 35,
//       rollNo: 27,
//       skills: [ 'javascript', 'cpp', 'python', 'java' ],
//       city: 'banglore',
//       username: 'am'
//     }
//   ]


// progarm 3) find out average age

// let r = students.reduce(function(acc,el){
//     return acc+ el.age
// },0)/students.length
// console.log(r)/////28.8

//program 4) first user more than 3 skills

// let e = students.find(function(el){
//     return el.skills.length>=3
// }).fullName
// console.log(e)////////////amol rao

// program 5) pune and python

let ra = students.filter(function(el){
    return el.city === "pune" && el.skills.includes('python')
}).forEach(function(el){
    console.log(el.fullName)
})
console.log(ra)///avinash vaidhya
//////////////////undefined

let ca = students.filter(function(el){
    return el.city==="pune"&&el.skills.indexOf('python')>0
}).forEach(function(el){
    console.log(el.fullName)
})
console.log(ca)///avinash vaidhya
//////////////////undefined

// program 7) not duplicate////(samjun ghyva lagel)

let ia = [11,22,33,444,55,66,77,11,22]
let notDuplicate = []

for(let i = 0; i<ia.length;i++){
    if (notDuplicate.indexOf(11)<0){
        notDuplicate.push(ia[i])
    }
}
console.log(notDuplicate)//[11]

// program 8) not duplicate

let y = [22,3,44,22]
let z=y.filter(function(el,index,arr){
    return arr.indexOf(el)===index
})
console.log(z)//[ 22, 3, 44 ]















