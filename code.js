function solution(number) { //creating function  
    var sumofNumbers = 0;

    for (var i = 0; i < number.length; i++) { // iterating on each number of array

        if (number[i] % 3 == 0 || number[i] % 5 == 0) { // using modulus of the number with 3 or 5 is 0 or not. If modulus is zero, it means the number is divisible.
            sumofNumbers = sumofNumbers + number[i];
        }
    }
    return sumofNumbers;
}


number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(number));