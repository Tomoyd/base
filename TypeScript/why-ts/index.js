var message = '111';
// Type 'number' is not assignable to type 'string'
message.toLocaleLowerCase();
var a = function () { };
var cat = {
    name: '小花'
};
/**
 * const cat: {
    name: "小花";
}
 */
var cat2 = { name: '小花' };
var b;
var c1 = b;
var a1 = c1;
function sayCate(num) {
    switch (num) {
        case '1':
            break;
        case '2':
            break;
        default:
            var n = num;
            return n;
    }
}
