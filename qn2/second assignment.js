function Age() {
    let userAge = prompt("Please input your age:");
    if (userAge < 18) {
        return "You are a minor";
    }else if (userAge >= 18 && userAge <= 36) {
        return "You are a youth";
    } else {
    return "You are an Elder";
    }
}

console.log(Age());