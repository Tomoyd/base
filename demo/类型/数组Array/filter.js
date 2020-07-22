let arr=[1,2,4,5,6]
arr.filter((item,index)=>{
   return item<6
})
let arr2=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>2&&arr[i]<5){
        arr2.push(arr[i])
    }
}
console.log(arr2)

for(let x in arr){
    if(arr[x]>2&&arr[x]<5){
        console.log(arr[x])
    }
}
arr.forEach(item=>{
    if(item>2&&item<5){
        console.log(item)
    }
})
