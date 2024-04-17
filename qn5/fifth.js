function sumToOneDigit(number) {
    // Function to calculate the sum of digits in a number
    function digitSum(num) {
        return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    // Keep looping until the number becomes a single digit
    while (number >= 10) {
        number = digitSum(number);
    }
    
    // Return the final single digit
    return number;
}

// Test the function
console.log(sumToOneDigit(567)); 
