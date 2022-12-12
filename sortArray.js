

Array.prototype.selectionSort = function(callback){
    var result = []
    for (var index in this){
        callback(result,index,this)
        if(this.hasOwnProperty(index)){
            //Sắp xếp
            var min = index

            for(var i = min;i< this.length;i++){
                if (this[min]>this[i]){
                    min = i
                }
            }
            [this[min],this[index]]=[this[index],this[min]]
            callback(this)
        }
    }
    return result
}
arr = new Array(10)
arr.push(17, 28, 94, 39, 19, 49, 2, 6, 18, 25)
console.log(arr);
var sortArr = arr.selectionSort(function(sortArr,index,arr){
    return sortArr
})
console.log('Arr :',arr);
console.log('sortArr :',sortArr);