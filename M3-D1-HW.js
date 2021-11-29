//1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.

let one
let two 
const sumOfTwo = function(one, two)
        {
            return one == two ? (one + two)*3 : one + two
        }
console.log("The sum of "+one+" and "+two+" is: "+sumOfTwo(3,3))
console.log("The sum of "+one+" and "+two+" is: "+sumOfTwo(3,4))


// 2. Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.

let a
let b
const check = function(a,b){
    if((a === 50 || b === 50) || (a+b == 50) ){
        return true
    }
    else{
        return false
    }
    }
    console.log(check(25,25))
    console.log(check(50,25))
    console.log(check(12,13))

    //3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string.
let charPos
let str
    const removeChar = function(charPos,str){
 part1 = str.substring(0, charPos);
  part2 = str.substring(charPos + 1, str.length);
  return (part1 + part2)
    }
   console.log(removeChar(2, "Strive"))

//    4. Create a function to find and return the largest of three given integers.

let x
let y
let z
const largeNumber = function(x,y,z){
    if((x>y)&&(x>z)){
console.log(x+" is largest of the given 3 numbers, "+x+","+y+",and"+z)
    }else if((y>x) && (y>z)){
console.log(y+" is largest of the given 3 numbers, "+x+","+y+",and "+z)
    }else{
        console.log(z+" is largest of the given 3 numbers, "+x+","+y+",and "+z)
    }
}
largeNumber(5,6,7)

//5. Create a function to check if two numbers are in the range 40-60 or 70-100. Return true if they do, return false if one (or both) don't.


const checkRange = function(first, second){

if((first>=40 && first <=60) && (second>=40 && second <=60)){
   return true
}
else if((first>=70 && first <=100) && (second>=70 && second <=100)){
   return true
}else{
     return false
 }
}

console.log(checkRange(20,30))

console.log(checkRange(20,50))

console.log(checkRange(45,50))

console.log(checkRange(80,90))


// 6. Create a function to create a new string composed of a specified number of copies of a given string. Pass the string and the number of copies as parameters.


let newStr
const repeatString =  function(newStr,repeatTimes){
    let repeated = newStr.repeat(repeatTimes)
    console.log("The copied string is: "+repeated)
}
repeatString("Strive",3)

// 7. Create a function to display the city name if the string begins with "Los" or "New". Pass the city name as a parameter. Return false if they start with a different string.
let city
const cityName = function(city){
    if((city.startsWith("Los")) || (city.startsWith("New"))){
        return city
    }else{
        return false
    }

}
console.log(cityName("LosAngeles"))
console.log(cityName("Newyork"))
console.log(cityName("Missouri"))

// 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. Pass the array as a parameter.
let arr = [1, 2, 3]

const arraySum = function(arr){
let sum = 0
    for (let i = 0; i < arr.length; i++) {
        
    sum += arr[i]
}
    console.log("The sum of elements in the array is: "+sum)
}
arraySum(arr)