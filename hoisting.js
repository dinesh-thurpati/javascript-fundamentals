//hoisting process ver it  js engine moves  all var declaration/function declaration in top of  script


console.log(a)     //undefined
var a = 24
console.log(a)   //24



function greet(){
    console.log("hii")
}
greet()


function show(){
    console.log(s)
    var s = 26
    console.log(s)
}
show()


function display(){
    // console.log(r)
    let r = 45
    console.log(r)
}
display()