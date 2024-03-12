console.log("Hello World.");

function generateRandomNumber() {
    let randomNum  = Math.floor(Math.random() * 15) + 1;

    if(randomNum >= 5) {
        console.log (`Random Number is >= 5`);
    } else {
        console.log (`Random Number is <= 5`);
    }

    return console.log(randomNum);
}
