var num = 10; //implicit inference
var num1 = 90; // explicit inference 
function funcs(a, b) {
    var c = a + b;
    return c;
}
console.log(funcs(20, 20));
var s = "hi";
// when we are not sure of any datatype that  variable is going to hold and in order to avoid compilation error 
var data = 89;
var datas = "dddds";
var value; //unknown datatype can accept a;; datatpes and manupulated  using if condition 
value = 40;
value = "hi";
if (typeof value === "string") // verify data type and then use it 
 {
    console.log(value.toUpperCase());
}
// object literals 
var user = {
    name: "suda",
    age: 31
};
console.log(user.name); // Accessing value sinside object using dot notation
var poly;
poly = "testleaf";
poly = 23;
console.log(poly);
