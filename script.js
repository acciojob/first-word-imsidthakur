function firstWord(s) {
    let arr = s.trim().split(" ");
    return arr.length > 0 ?  arr[0] : "";
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
