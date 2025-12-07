let num = 10; //implicit inference
let num1 : number = 90; // explicit inference 

function funcs(a:number,b:number) :number{
    let c= a+b;
    return c;
}
console.log(funcs(20,20))
let s : string = "hi"

// when we are not sure of any datatype that  variable is going to hold and in order to avoid compilation error 

let data : any = 89;
let datas : any = "dddds"

let value :unknown; //unknown datatype can accept a;; datatpes and manupulated  using if condition 
value = 40;
value ="hi"
if(typeof value === "string")// verify data type and then use it 
{
console.log(value.toUpperCase());

}
// object literals 
let user = {
    name:"suda",
    age :31
}
console.log(user.name);// Accessing value sinside object using dot notation

let poly : string|number;
poly ="testleaf";
poly = 23;
console.log(poly);
