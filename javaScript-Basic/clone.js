// using json.parse() and json.stringify()

const originalObject = {
    name: "Larry Song",
    addr:{
        city: "Shanghai",
        distract: "Pudong"
    }
}

const cloneObj = JSON.parse(JSON.stringify(originalObject));
console.log(originalObject)
console.log(cloneObj)

// using recursive function

function deepClone(obj){
    return cloneObj;
}

console.log(deepClone(originalObject))