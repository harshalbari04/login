////comparison operator
///>   <   <=    >=    !=   ==   ===   !==
console.log(6<7)/////true
console.log(7>=7)////t
console.log(6<=6)///t
console.log(6!=5)////t
console.log(6==6)////t
console.log(7>9)////false
console.log(2===2)////t
console.log(3===4)/////f
console.log(4=="4")///t
console.log(4!="4")///f
console.log(2==="2")///f
console.log(2!=="2")////t
console.log(3!==3)////f
console.log('----------------')


/////////////  logical Operator


// AND OR  NOT
// &&  ||   !
console.log('------AND------')
///   AND ----  &&
// true   true------>   true
// true   false----->   false
// false  true------>   false
// false  false---->    false
console.log(7>6 && 7===7)/// t
console.log(7=="7" &&  8!=="8")///t
console.log(6 == "6"   &&  8=== "8")///f
console.log(6>7 && 8<6)///f

console.log('--------OR-------')
////   OR    ||
// true   true------>   true
// true   false----->   true
// false  true------>   true
// false  false---->    false
console.log(8>9 || 8===8)///t
console.log(8>=9 || 8!==8)///f
console.log(9!=='9' ||9===9)///t

console.log("----NOT-------")
//// NOT    !
/// true-----false
/// false----true
console.log(!true)////f
console.log(!false)///t
console.log(!5===5)///f
console.log(!5=="5")//f
console.log(!(5==="5"))//???t
