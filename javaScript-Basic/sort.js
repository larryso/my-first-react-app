// bubble sort
function bubbleSort(arr){
    let n = arr.length;
    for(var i=0; i< n-1; i++){
        let temp = 0;
        for(let j= 0; j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                temp = true;
            }
        }
        if(!temp){
            break;
        }
    }
    return arr
}
//insertionSort
function insertionSort(arr){
    for (let i = 1; i< arr.length; i++){

    }
    return arr;
}

var arr = [2,3,1,4,7,6]
const sortedArray = bubbleSort(arr)
console.log(sortedArray)

var arr_2 = [64,34,25,12,22,11,90]
//console.log(insertionSort(arr_2))