// all methods of array---------->
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



//// map(function)

// let year= [1990,1991,1989]
// let ages=year.map(function(currentElement,index,arr){
//     return 2021-currentElement
// })
// console.log(ages)
// ///
// let gaa = [11,22,33]
// let qqq =gaa.map(function(el,index,arr){
//     return el + 2
// })
// console.log(qqq)
// ///
// let nnn = [11,22,33]
// let numberr = nnn.map(function(a,b,c){
//     return a + 2
// })
// console.log(numberr)
// ////
// let birthYears=[2001,2003,2004]
// let agy = []

// for(let i = 0;i<birthYears.length;i++){
//     let age =2021-birthYears[i]
//     agy.push(age)
// }
// console.log(agy)
// ///
// let ttt=birthYears.map(function(el,index,arr){
//     return 2021 - el
// })
// console.log(ttt)
// ///
// ////// filter------------>
// let zzz= (11,22,27,29,30)
// let grt25 = []
// for(let i=0;i<zzz.length;i++){
//     if(zzz[i]>25){
//         grt25.push(zzz[i])
//     }
// }
// console.log(grt25)///////????????????????

// let av =[23,44,55,66,67]
// let grt60 = []
// for(let i=0;i<av.length;i++){
//     if(av[i]>60){
//         grt60.push(av[i])
//     }
// }
// console.log(grt60)
    
// let kkk = av.filter(function(el,index,arr){
//     return el>60
// })
// console.log(kkk)
// ///reduce
// let avv =[11,22,33]
// let totala = 0
// for(let i=0;i<avv.length;i++){
//     totala=totala+avv[i]
// }
// console.log(totala)

// //
// let ooo = avv.reduce(function(acc,el,index,arr){
//     return acc + el
// },0)
// console.log(ooo)
// /////////////
// let transactions = [500,-250,300,1000,-50,-500]
// let deposit = transactions.filter(function(el){
//     return el>0
// })
// console.log(deposit)
// ////////////
// ///forEach--------------->
// let fullname= ["harshal","sagar","roshan"]
// for(let i=0;i<fullname.length;i++){
//     console.log("welcome"+fullname[i])
// }




// //-------------------
// let names = ["harshal","sagar","roshan"]
// let rrr= names.forEach(function(el,index,arr){
//     console.log("welcome"+ el)
// })
// console.log(rrr)
// ///-----reverse()
// let ddd=[11,22,33,44,55,66,77]
// let fff=ddd.reverse()
// console.log(fff)
// //------------every()
// let dda = [11,22,33,44,55,66,77]
// let ffa=dda.every(function(el,index,arr){
//     return el>10
// })
// console.log(ffa)/////true
// //-----
// let gga = dda.every(function(el,index,arr){
//     return el>25
// })
// console.log(gga)///false
// //-------
// //----------some()
// let hha=dda.some(function(el,index,arr){
//     return el>50
// })
// console.log(hha)////true
// let iia = dda.some(function(el,index,arr){
//     return el>90
// })
// console.log(iia)///false



// //-----------concat()

// let aqq=[11,22,33]
// let bqq=[44,55,66,77]
// let ab=aqq.concat(bqq)
// console.log(ab)///[11, 22, 33, 44,55, 66, 77]
// let ba= bqq.concat(aqq)
// console.log(ba)///[44,55, 66, 77,11,22,33]

// ///-------split()

// let lla="harshal-bari-1111"
// console.log(lla)
// console.log(typeof lla)
// let zza=lla.split('-')
// console.log(zza)///[ 'harshal', 'bari', '1111' ]

// ////-----join()
// let la=["saurabh-bari-1111"]
// let oa=la.join('-')
// console.log(oa)/////saurabh-bari-1111

//------->

// sort-->

// let names = ["apple","chicku","banana"]
// let avb = names.sort()
// console.log(avb)//[ 'apple', 'banana', 'chicku' ]///alphabatically sorting

// let nu = [22,44,33,11,333,111]
// let un = nu.sort()
// console.log(un)//[ 11, 111, 22, 33, 333, 44 ]//1-2-3 sorting

//-------------->

// flat-->

// let array = [[1,2,3,],[4,5,6],[7,8,9]]
// let ar = array.flat()
// console.log(ar)//[1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(array[0][1])//2
// console.log(array[2][2])//9

// let array2 = [[1,2,3],[7,8,9],[4,5,6]]
// let ar2 = array.flat()
// console.log(ar2)//[1, 2, 3, 4, 5, 6, 7, 8, 9]

///----->

// fill-----

// let qwe=[1,2,3,4,5,6,7]
// let wwe=qwe.fill("harshal",-3)
// console.log(wwe)///[ 1, 2, 3, 4, 'harshal', 'harshal', 'harshal' ]
// console.log(qwe)///[ 1, 2, 3, 4, 'harshal', 'harshal', 'harshal' ]
// let qww=[1,2,3,4,5,6,7]
// let rrr=qww.fill("saurabh",2,5)///last position ;5 not included
// console.log(rrr)///[ 1, 2, 'saurabh', 'saurabh', 'saurabh', 6, 7 ]


// splice----->

// let ttt= [11,22,33,55,66,88]
// let yyy=ttt.splice(1,2,"harshal","bari")///(startposition,numberofelement,re,re)
// console.log(yyy)///[ 22, 33 ]
// console.log(ttt)///[ 11, 'harshal', 'bari', 55, 66, 88 ]

// filter--->

// let nm = [33,44,55,66,77,88,99]
// let nmn = nm.filter(function(el){
//     return el>45
// })
// console.log(nmn)//[ 55, 66, 77, 88, 99 ]

// // find--->

// let nmnm = nm.find(function(el){
//     return el >75
// })
// console.log(nmnm)// 77

// // findIndex-->

// let nnnn = nm.findIndex(function(el){
//     return el>75
// })
// console.log(nnnn)// 4







