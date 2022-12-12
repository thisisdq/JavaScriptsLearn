/* 
for (expression 1; expression 2; expression 3) {
    TODO
}
*/ 

// For in --> string arr obj
var myInfo = {
    name: 'DanhQuy',
    age: 22,
    addr: 'BacNinh'
}
for (var key in myInfo){
    console.log(myInfo[key]);
}
// For of --> string arr, không áp dụng với Obj
// Muốn dùng Obj thì dùng qua Object.keys() / Object.values()
for (var value of Object.keys(myInfo)) {
    console.log(value)
}