//obtains is simple it contains key value pair

let obj = {                      //object literal
    name : "eshan",
    age : 26,
    address : "hyd"
}

obj.email = "dinesheshan.852@gmail.com"
console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj.address)
console.log(obj["age"])

//eample for in

for(let key in obj){
    console.log(key, obj[key])
}


//eample 2
let ipl = "chennai super kings"
let favindiaplayer = {
    name : "ms dhoni",
    tshirtnumber : 7,
    captain : "india",
    ipl : ipl
}
console.log(favindiaplayer)

for (let ms in favindiaplayer){
    console.log(ms, favindiaplayer[ms])
}

// dynamic key operations in object
var ayurvedic = ["vata","pitta","kapha"]
var properties = [35,40,25]
var ratio = {} ;
for(let k=0;k<ayurvedic.length;k++){
    ratio[ayurvedic[k]] = properties[k]
}
console.log(ratio)