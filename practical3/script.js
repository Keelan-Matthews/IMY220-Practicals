// Section 1
function FactorialChecker() {
    this.printFactorial = function (num) {
        if (num < 0) {
            return -1;
        } else if (num == 0) {
            return 1;
        }

        var factorial = 1;
        for (var i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

    this.fillArray = function (num) {
        var n = num;
        for (var i = 1; ; i++) {
            if (n % i == 0) {
                n /= i;
            } else break;
        }

        if (n !== 1) return "This is not a factorial";

        let array = [];
        let result = 1;
        let total = 1;
        while (total < num) {
            for (var i = 1; i <= array.length + 1; i++) {
                result *= i;
                if (result > num) {
                    break;
                }
                array.push(i);
                total += result;
            }
        }
        return array;
    }
}

var factorialChecker = new FactorialChecker();

document.getElementById("GenerateFactorial").addEventListener("click", function () {
    var num = document.getElementById("FactorialValue").value;
    var result = factorialChecker.printFactorial(num);
    document.getElementById("FactorialResult").innerHTML = result;

});

document.getElementById("GenerateFactorialList").addEventListener("click", function () {
    var num = document.getElementById("FactorialInput").value;
    var result = factorialChecker.fillArray(num);
    document.getElementById("FactorialListResult").innerHTML = result;
})

// Section 2
function PigLatinEncrypt(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var result = "";
    var temp = "";
    
    if (vowels.includes(str[0])) 
        result = str + "way";
    else {
        temp = str.slice(0, 1);
        result = str.slice(1) + temp + "ay";
    }
    
    var hasVowel = false;
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            hasVowel = true;
            break;
        }
    }

    if (!hasVowel) result = str + "ay";

    return result.toLowerCase();
}

document.getElementById("PigLatinEncrypt").addEventListener("click", function () {
    var str = document.getElementById("SentenceToConvert").value;
    var result = PigLatinEncrypt(str);
    document.getElementById("PigLatinResult").innerHTML = result;
})