let arr1=[1,2,3,5,6,7]
let flag=arr1.every(item=>{
    console.log(item)
    return item<3
})
console.log(flag)

let arr2=[5,8,9,4,5,7,9,2]
let  test=arr2.every((arrx,xiaobiao,afsss)=>{
    console.log(arrx,xiaobiao,afsss)

    return arrx>2
},{arg:99})
console.log(test)
let  test22=arr2.every(function (item){
    console.log(this)
    return false
},{arg:88})
