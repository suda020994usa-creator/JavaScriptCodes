type payment = "UPI" | "CreditCard" | "Paypal";

function pay(pName: payment) {

    if (pName === "UPI") {
        console.log("UPI");
    } else {
        console.log("Credit Card");
    }
}
pay("UPI")