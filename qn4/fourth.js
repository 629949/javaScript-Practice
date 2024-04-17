function firstPalindrome(string) {
    let reg = /[\W_]/g;
    let normalStr = string.toLowerCase().replace(reg, "");
    let reversed = normalStr.split("").reverse().join("");
    if (reversed === normalStr) {
        return reversed;
    }else {
        return "not Palindrome";
    }
}

firstPalindrome(normalStr);

