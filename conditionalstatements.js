

let  age = 23
 
if(age > 18) {
    console.log( "valid voter")
} else {
    console.log("invalid voter")
}


//wap chec number is even or odd

let n = 10
if(n%2===0){
    console.log("number is even")       //if - else
}else{
    console.log("number is odd")
}


//wap check whether x is positive,negative or zero
let x = 19
if (x>0){
    console.log("number is positive")             //  if else-if else
}else if(x<0){
 console.log("number is negative")
}else{
    console.log("number is zero")
}




// prompt function 

let y = prompt("enter the number:")
console.log(y)


//wap check the number whether  number is even or odd with prompt function

let n1 = Number(prompt("enter the number"))
if(n1%2===0){
    console.log("number is even")
} else {
    console.log("number is odd")
}


//wap check number is positive , negative or zero with prompt function

let n2 = Number(prompt("enter the number"))
if(n2>0){
    console.log("positive number")
}else if(n2<0){
    console.log("negative number")
}else{
    console.log("zero")
}


//switch case condition statement
let  z = 89

switch(true){               //switch - case
    case z>=90 :
        console.log("gradeA")
        break;
        case z>=80 :
        console.log("gradeB")
        break;
        default :
           break;
}


//wap  same example of switch case (js : 66)
let z1 = 35
if(z1 >=90){
    console.log("gradeA")
} else if(z1>=80) {
    console.log("gradeB")
} else{
    console.log("gradeC")
}


//ternary operator condition statement

let n3 = 23

const msg = n3>20 ? "greater" : "smaller"
console.log(msg)

//wap chec even or odd
let n4 = 23

const msg1 = n4%2===0 ? "even": "odd"
console.log(msg1)




