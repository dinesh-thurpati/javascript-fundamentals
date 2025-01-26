function sum(){
    let a = 10
let b = 20
let c = a+b                  //parameter value in function
console.log(c)
}
sum()


//arguments
function greet(msg){
    console.log(msg)
}                                   //argument value in function
greet("good evening")
greet("good night")


//task- checkevenorodd
function checkevenorodd(n){
    if(n%2===0){
        console.log("number is even")
    }else{
        console.log("number is odd")
    }
}
checkevenorodd(21)
checkevenorodd(22)



function calculate(a,b){     //return value in function
    return a+b
}
let c = calculate(10,20)
console.log(c)

//realtime application of function in any netflix,etc
let userpaid = false
function checksubscription(userpaid){
if(userpaid===true){
    return "payment done"
}else{
    return "payment not received"
}

}
let result = checksubscription()
console.log(result)


//return value is control back statement
function lum(){
    console.log("hello")
    return 11233
    console.log("hii")
    
}
let r = lum()
console.log("good day", r)



//function with hotel booking

function hotel(person){
    if(person===true){
        return "booked"
    } else {
        return "not booked"
    }
}
console.log(hotel(true))



//function with discount is present

function discount(){
    let n1 = Number(prompt("enter the minimum price")) ;
    switch(n1 <= 2025){
        case true :
            console.log("offer applied")
            break ;
            case false :
                console.log("no offer ")
                break ;
            
    }
}
discount()


//return function from function

function greet(){
    return function sayhi(){
        console.log("hello world :)")
    }
}
let result1 = greet()
console.log( result1())
