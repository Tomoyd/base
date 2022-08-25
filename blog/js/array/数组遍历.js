/**
 * 这些遍历方法，会遍历，索引存在的，即空项目不会被遍历到，index in array 为true的才会被遍历
 *  1. forEach(cb:(itemVal,itemIndex,array)=> void) 遍历每一项
 *  2. map(cb:(itemVal,ItemIndex,array)=> any) 遍历每一项,map返回一个新数组，并将cb返回值作为新数组的项
 *  3. filter(cb:(item,index,arr)=> boolean) 遍历每一项，返回一个新数组，新数组的成员只是包括cb返回true的项
 *  4. reduce(cb:(pre,current,index,array)=>any,initValue) 返回最后cb执行的结果
 *     pre是initValue值或者取元素第一个值开始，后面等于上次cb执行返回的值
 *     current 是当前的值， index是当前的index，array是数组本身，initValue是pre初始值
 *  5. reduceRight：与reduce对应，从右边开始遍历
 *  6. every(cb:(item,index,arr)=>boolean) 比较每一项cb返回值如果都为true，则返回true，否则返回false
 *  7. some:与every对应，有一项为true，则some返回结果为true，否则返回false
 *  8. indexOf(item,start) 返回item在数组的index，不在返回0 从start开始从前往后找 start为负值时表示从end开始数索引
 *  9. lastIndexOf(item,start) 从start开始从后往前找
 *  10. find(cb:(val,index,arr)=>boolean) ES6 返回符合的项，否则返回undefined
 *  11. findIndex(cb:(val,index,arr)=>boolean) ES6 返回符合项的 索引
 *
 */

let a = Array(4);
a[0] = 1;

console.log(
  'every',
  a.every((item) => item)
);

/**
 * 其他es6 方法
 * Array.from('1233') 从一个有遍历器的值中返回一个数组
 * array.keys 返回可遍历的key
 * array.entries 返回 实体数组 如[[0,item0],[1,item1],[2,item2]]
 * array.includes 数组中是否包含某个值
 * array.copyWithin(targetIndex, start, end) end>start 才有效，end>length 按length处理
 */

// valueOf 返回数组自己

// export {};
