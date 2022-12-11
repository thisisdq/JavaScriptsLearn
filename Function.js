/*
    Tên hàm:  a-Z , 0-9
    - Số không được đứng đầu
*/ 

function nameFuncion() {
    console.log('function call');
}
// Call funcion
nameFuncion()

// Argument -> truyển nhiều tham số
function sum(){
    let sum = 0
    for ( var num of arguments){
        sum += num
    }
    return sum
}
console.log(sum(1,2,3,4,5,5,5));


/* Các loại function
    1. Declaration funcion  -- có tên, có thể gọi trước khi định nghĩa
    2. Express function     -- không có tên
    3. Arrow function
*/

