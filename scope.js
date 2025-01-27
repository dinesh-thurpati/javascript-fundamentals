//scope means area /region the variables are accessible

//3 types - global, function or local , block scope



//global scope accesssible
let n = 23
var o = 24
const p = 33
console.log(n,o,p)
                                         
function sum(){
    console.log(n,o,p)
}
sum()


//function 0r local scope accessible

function greet(){
    let loc1 = "hii dinesh"
    var loc2 = "hii eshan"
    const loc3 = "hii hero"
    console.log(loc1,loc2,loc3)
}
greet()




//block scope accessible

{
    let bloc1 = "avengers"
    let bloc2 = "part-2"
    console.log(bloc1,bloc2)
}




//eample

let  x = 200
var y = 234
let z = 789

function analyse(){
    let  x = 345
    console.log(z)               
    console.log(x)
    {                 
        let y = 289
        const z = 343
        console.log(x)               
                                    
        console.log(z)
    }
    console.log(z)               
}

analyse()
console.log(x)
console.log(y)
console.log(z)