interface AdvancedArithmetic {
    divisor_sum: (number) => number;
}
class MyCalculator implements AdvancedArithmetic {
    divisor_sum(num: number) {
        if (num < 1000) {
            let result = 0;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    if (i == (num / i))
                        result += i;
                    else
                        result += (i + num / i);
                }
            }
            return (result + 1 + num);
        }
        else {
            return 1000
        }

    }
}

let Mcal = new MyCalculator()
console.warn(Mcal.divisor_sum(100));
