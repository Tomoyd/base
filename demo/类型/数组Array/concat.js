/**
 * 用于合并多个项
 * 不会改变现有的数组，会返回一个新数组
 *
 */
let array1=[1,2,3]
let array2=[4,5,6]
let array5=[7,9,8]
//想得到[1,2,3,4,5,6]这个数组怎么得到
let  arr3=array1.concat(array2,array5,3,{i:8},"wang")

console.log(arr3)

let  arr4=array2.concat(array1,array5)

console.log(arr4,array1,array2,"haoleba")

