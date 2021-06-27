//Given a function dropElements(arr, func) the array arr, 
// iterate through and remove each element starting from 
// the first element (the 0 index) until the function func returns true 
// when the iterated element is passed through it
// Then return the rest of the array once the condition is satisfied, 
// otherwise, arr should be returned as an empty array.

function dropElement(arr,func){
    let newArr = []
    for(ar of arr){
        if(func(ar)){
            newArr.push(ar)
        }
    }
    console.log(newArr)
}

function greaterThan5(n){
    return n>5
}
function lessThanorEqual3(n){
    return n>=3
}

let array = [1,2,3,4]
dropElement(array,lessThanorEqual3)
dropElement(array,greaterThan5)

