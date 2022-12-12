// // Create Array
// var language = [
//     'JavaScrips',
//     'JAVA',
//     'Python'
// ]
// // Length Array
// console.log(language.length) // -> 3

// // 1.To string
// console.log(language.toString()); // -> JavaScrips,JAVA,Python
// // 2. Join
// console.log(language.join('$')); // ->  JavaScrips$JAVA$Python
// /*  pop     -> xoá và return phần tử cuối mảng
//     push    -> thêm vào và return phần tử cuối mảng
//     shift   -> xoá phần tử và return đầu tiên  
//     unshift -> thêm vào đầu
// */
// console.log(language.shift())
// console.log(language);
// console.log(language.unshift(''))
// console.log(language);


/*
Array method:
    forEach()   -> duyệt
    every()     -> tất cả phần tử trong array đúng -> return true
    some()      -> chỉ cần 1 phần tử trong array đúng -> return true
    find()      -> tìm kiếm -> return phần tử đầu tiên thoả mãn
    filter()    -> tìm kiếm -> return tất cả phần tử thoả mãn
    map()
    reduce()
*/

/*
map()
var courses =[
    {
        id: 1,
        name: 'Javascript',
        coin: 200
    },
    {
        id: 2,
        name: 'Python',
        coin: 200
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 200
    },
    {
        id:4,
        name: 'C/C++',
        coin: 200
    },
    {
        id: 5,
        name: 'Java',
        coin: 200
    }
]

var newCourseMap = courses.map(function(courses,index){
    return {name:courses.name,
    index:index,
    cointext : `Gia: ${courses.coin}`
    }
})
console.log(newCourseMap);
*/