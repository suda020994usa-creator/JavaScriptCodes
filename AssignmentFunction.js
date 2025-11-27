function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile("John");

// 2nd 

const double = (num) => num * 2;

console.log(double(5));

//call back

function getUserData(callback) {
    setTimeout(() => {
        callback();  // calling callback after 3 seconds
    }, 3000);
}

getUserData(function() {
    console.log("Call Back Function");
});

