// arrow function
function sum(a, b) {
    return a + b;
}
sum = (a, b) => {
    return a + b;
}

log = () => {
    console.log("i am your log")
}
// setTimeout(log,2000);

a = setInterval(log, 5000);
// use clearInterval(a)/clearTimeout(a) to cancel setInterval/setTimeout