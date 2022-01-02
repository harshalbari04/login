let fruit="mango"
let a=fruit.length////5
console.log(a)////mango
console.log(typeof fruit)////string
console.log(fruit[0]) ////for index ...squar bracket [ ] only
console.log(fruit[fruit.length-1])/////fruit.lenngth-1=last index 

for(let i=0;i<5;i++){
    console.log(i)///////0 1 2 3 4
}
for(let i=4;i>=0;i--){///////4 3 2 1
    console.log(i)
}
for(let i=0;i<5;i++){
    console.log(fruit[i])//////m a n g o
}

for(let i=4;i>=0;i--){
    console.log(fruit[i])//////o g n a m
}

let veg= "tomato"
console.log(veg)
console.log(veg.length)///6
let b=veg.length
console.log (b)
console.log(veg[3])////a
console.log(veg[veg.length-1])/////o
for(let i=0;i<=5;i++){
    console.log(veg[i])
}
for(let i=5;i>=0;i--){
    console.log(veg[i])
}



/////////////      METHOD


//////toLowerCase////
let c=veg.toLowerCase()
console.log(c)
////toUpperCase
let d=veg.toUpperCase()
console.log(d)
console.log(veg[3])
////indexOf
let e= veg.indexOf("t")////0
 console.log(e)
 let hh=veg.indexOf("a")///3
 console.log(hh)
 let f=veg.indexOf("T")////-1
console.log(f)

////includes
let g=veg.includes("tom")////tom in tomato ...yes ...so true
console.log(g)
let h=veg.includes("TOM")
console.log(h)////false
//////////////////////


///program    1

let fruitt="apple"
for (let i=0;i<5;i++){
    console.log(fruitt[i])/////nahi samajala
    if(fruit[i]=='p'){
        count=count+1
    }
}
////console.log(count)/////


////slice method

///0   1   2   3   4
///a   p   p   l   e
//-5  -4  -3   -2  -1
let fg=fruitt.slice(1,3)
console.log(fg)
let gf=fruitt.slice(3)
console.log(gf)
let gff=fruitt.slice(0,3)
console.log(gff)
let ii=fruitt.slice(-4,-1)
console.log(ii)
let gg=fruitt.slice(-3)
console.log(gg)
let zz=fruitt.slice(0,-2)
console.log(zz)
let zzz=fruitt.slice(-4,1)////return=blank
console.log(zzz)
let hhh=fruitt.slice(-1,-3)///return=blank
console.log(hhh)
let vv=fruitt.slice(-3,-1)
console.log(vv)
///////////////includes method
let qqq=fruitt.includes("ppl")
console.log(qqq)
