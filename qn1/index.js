
function fizzBuzz() {
    let stringA = prompt("Enter the first string:");
    let stringB = prompt("Enter the second string:");
    let x = stringA + stringB;
    if (x.length % 3 === 0 && x.length % 5 === 0)
    {return "FizzBuzz";
}else if (x.length % 3 === 0) {
    return "Fizz";
} else if(x.length % 5 === 0) {
    return "Buzz";
} else {
    return "not divisible by either";
}
}

console.log(fizzBuzz());