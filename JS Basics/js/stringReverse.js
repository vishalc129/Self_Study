var string = "I am javascript", temp = '', outputString = '';

function reverse(string) {
    // var reversedString = '';
    // for (; reversedString.length !== string.length;) {
    //     reversedString = string[reversedString.length] + reversedString;
    // }
    // return reversedString;

    /**
     * if input is javascript -> then it remove j from start and put at end like avascriptj
     * or directly return    return (string === '') ? '' : reverse(string.substr(1)) + string.charAt(0);
     */
}

for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
        outputString += (outputString && ' ') + reverse(temp);
        temp = '';
    } else {
        temp += string[i];
    }
}
if (temp) outputString += (outputString && ' ') + reverse(temp);

console.log(outputString);    //i ma tpircsavaj