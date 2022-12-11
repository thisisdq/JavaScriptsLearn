/*

var emailkey = 'email'

var myInfo = {
    name: 'DanhQuy',
    age: 22,
    addr: 'BacNinh',
    [emailkey]: 'danhquy1101@gmail.com',
    getName: function() {
        return this.name
    } 
    // --> Funcion được gọi là phương thức (method)
}

console.log(myInfo['name']) // DanhQuy
console.log(myInfo.name)    // DanhQuy
// delete
delete myInfo.age
console.log(myInfo.getName());

*/


// Object Constructor
function User(firstName, lastName, avatar){
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var user = new User('Danh', 'Quy', 'avatar');
var author = new User('F8', 'SD', 'avatar');

user.a = 'a'

console.log(author.getName());  // --> F8 SD
console.log(user.getName());    // --> Danh Quy


// prototype object

User.prototype.className = 'F8'
// className: 'F8' trong prototype
console.log(author.className);
console.log(user.className);