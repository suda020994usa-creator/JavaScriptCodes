

function getbrowser(bname) {
    


if (bname==="chrome") {
    console.log("So its chrome");
    
    
} 
else if (bname==="edge") {
    console.log("So its edge");
    
    
}

else {
    console.log("its something else");
    
    
}
}
getbrowser("firefox")

//switch 

function getversion(params) {
    switch (browser) {
        case "edge":
            console.log("its edge ");
            break;
        case "chrome":
            console.log("its chrome");
            break;
        case "mozilla":
            console.log("its mozilla");
            break;
        default:
            console.log("its nothing");
            
    }
    
}

//let browser = "chrome";
let browser = "chromium";
getversion()

function calc(params) {
    switch (op) {
        case "Add":
            console.log("Addition");
            break;
        case "Sub":
            console.log("Subtraction");
            break;
        case "Div":
             console.log("Division");
            break;
        default:
            console.log("its nothing");
            
    }
}
let op = "Sub";
calc()
