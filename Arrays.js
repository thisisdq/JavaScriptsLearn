// Create Array
var language = [
    'JavaScrips',
    'JAVA',
    'Python'
]
// Length Array
console.log(language.length) // -> 3

// 1.To string
console.log(language.toString()); // -> JavaScrips,JAVA,Python
// 2. Join
console.log(language.join('$')); // ->  JavaScrips$JAVA$Python
/*  pop     -> xoá và return phần tử cuối mảng
    push    -> thêm vào và return phần tử cuối mảng
    shift   -> xoá phần tử và return đầu tiên  
    unshift -> thêm vào đầu
*/
console.log(language.shift())
console.log(language);
console.log(language.unshift(''))
console.log(language);