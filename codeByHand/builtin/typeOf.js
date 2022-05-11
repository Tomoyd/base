function typeOf(o) {
  // Object.prototype.toString 对象进行操作后会得到[object String] 字符串，
  // 对字符串截取即可得到类型
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
}
