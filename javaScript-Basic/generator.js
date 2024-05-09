let arr = [1,2,3,4,5]
/*
* The function* declaration creates a generator function object, each time when a generator function is
* called, it return a Generator object, when the iterator's next() called, generator function's body is 
* executed until the first yield expression.
*/
function* generator(){
    yield arr[4];
    yield arr[3];
    yield arr[2];
}
let result = generator();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());

for(let item of generator()){
    console.log("using for of", item)
}

// generator functions are powerfull tool that used to create iterators and other functions that 
// need to be able to pause and resume their expression

function* printTillCount(){
    let id=0;
    while(id<3)
      yield id++
}
let resultNew = printTillCount();
console.log(resultNew.next())
console.log(resultNew.next())
console.log(resultNew.next())
console.log(resultNew.next())