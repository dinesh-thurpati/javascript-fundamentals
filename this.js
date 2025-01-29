//this is referers that have current contet /object that function is executed 

console.log(a)
var  a = 33
console.log(a)
// console.log(this)


//rules
//01 global execution window and this relation .. this object is part of window in global execution
console.log(a1)
var  a1 = 2333
console.log(a1)

console.log(this.a1)
console.log(window.a1)
console.log(a1)


//eample
function show(){
    console.log(" bharat mata ki jay!")
}

show()
this.show()
window.show()



//rule 02
let obj = {
    name : "dinesh thurpati",
    showgreet: function(){                //object of function  
        console.log("hii i am dinesh")
        console.log(this)
    } ,
    showplace: function(){                         //method of function ( function())
        console.log("i live in balaji hills")
        console.log(this)
    }
}

obj.showgreet()
obj.showplace()


//example

let person = {
    name : "vasco de gama",
    showcharacter: function(){
        console.log("very worest character")
        console.log(this)
    },
    showphilosophy: function(){
        console.log("world is dark")
        console.log(this)
    }
}

console.log(person)
person.showcharacter()
person.showphilosophy()



//example

function display(){
    console.log(this)
}
display()
this.display()
window.display()

// eample

let human = {
    livingtype : "living organism",
    evolution : "4m years",
    search : function(){
        console.log(this)
    }

}

human.search()


//example
let rank = 28187
let student = {
    rollno : 352,
    name:"dinesh thurpati",
    college : "SNIST",
    rank : [rank],
    showinfo : function(){
   
        console.log(this)
        console.log(rank=28187)
    }
}
student.showinfo()


//rule 3
//function you have method and inside another function method refers th this as window


let country ={
     nation : "INDIA",
     population : "1.5BIllion",
     showeconomy : function(){
        console.log(this);
        function show77(){
            console.log(this)
        }
        show77()
     }
}

country.showeconomy()

//rule 04
//arrow function dont have own this but takes this from surrounding environment

function add1(){
    console.log("ramudu manchi baludu")
}

let add2 = ( ) => {
    console.log("ramudu manchi pillavadu")
}

add1()
add2()

//eample
let add3 = () => "hello arrow"
console.log((add3))

add3()

//eample

let vision = {
    name : "hey!",
    show11 : function(){
        console.log(this)},
        show22 : ()=>{
            console.log(this)
        }
}

vision.show11()
vision.show22()


//rule05
//aarrow function as this in surriung environment it prints that this.

let mencloth ={
    brand :"khadi",
    showq : function(){
        console.log(this);

        let showp = () => {
            console.log(this)
        }
        showp()
    }
}

mencloth.showq()


//rule06
//


function usser(){
    console.log(this)
}

function usser(){
    console.log(this)
    return "hii dude"

}

let r1 = new usser()
console.log(r1)

let r = usser()
console.log(r)

//example

let line1 ={
    name:"dinesh",
    age: 23,
    showa : function(){
        console.log(this);
      let   showb1 = ()=>{
            console.log(this)
        }
        showb1()
    },

   
showc : function(){
    console.log(this);
    function showd(){
        console.log(this)
    }
    showd()
},
showe : ()=>{
    console.log(this)
}


}

line1.showa()
line1.showc()
line1.showe()