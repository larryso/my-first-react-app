const flatten = (arr, result=[]) =>{
    for(let i=0; i< arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

const arr = [1,2,[5,4,[7,8,9,[10,11,12]]]]
console.log(flatten(arr))

//console.log(arr.flat(Infinity))