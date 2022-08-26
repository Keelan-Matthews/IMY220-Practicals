class FactorialChecker {
	printFactorial(num) {
		let fact = 1;
		for (let i = 1; i <= num; i++) {
			fact *= i;
		}
		return fact;

	}; //end function

	fillArray(num) {
		let start = num;
		let init = 1;
		let i = 1;
		let arr = [];
		let fac = true;
		while (true) {
			init = init * i;
			if (init % 2 == 0 || init == 1) {
				if (init > start) {
					fac = false;
					break;
				}
				arr.push(i);
				i++;
				if (init == start)
					break;
			}
		}
		if (fac)
			return arr;
		else
			return "This is not a factorial";
	}; //end function
}//end FactorialChecer


const PigLatinEncrypt = str => {
	let vowels = "aeiou";
	vowels = vowels.split("");
	let newStr = [];
	str = str.toLowerCase();

	if (vowels.indexOf(str[0]) > -1) {
		newStr = str + "way";
		return newStr;
	} else {
		let firstMatch = str.match(/[aeiou]/g) || 0;
		let vowel = str.indexOf(firstMatch[0]);
		newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
		return newStr;
	}

}//end PigLatinEncrypt

const checkUniqueLetters = str => {
	let arr = str.split("");
	const unique = arr.reduce(
		(acc, curr) =>
			acc.find((i) => i === curr) ? acc : [...acc, curr],
		[]
	);
	return unique.length;
}


const checker = new FactorialChecker();

document.getElementById("GenerateFactorial").onclick = () => {
	let input = document.getElementById("FactorialValue").value;
	document.getElementById("FactorialResult").innerHTML = `The factorial value of ${input} is ${checker.printFactorial(input)}`;
}

document.getElementById("GenerateFactorialList").onclick = () => {
	let input = document.getElementById("FactorialInput").value
	document.getElementById("FactorialListResult").innerHTML = `The values that make up the factorial ${input}: ${checker.fillArray(input)}`;
}

document.getElementById("PigLatinEncrypt").onclick = () => {
	let input = document.getElementById("SentenceToConvert").value;
	document.getElementById("PigLatinResult").innerHTML = `The result when converting ${input} to pig latin is: ${PigLatinEncrypt(input)}`;
}

document.getElementById("checkRecurringChars").onclick = () => {
	let input = document.getElementById("charChecker").value;
	document.getElementById("recurringCharsResult").innerHTML = `The word ${input} has ${checkUniqueLetters(input)} unique letters`;
}