function bmiCalculator (weight, height) {//weight in kg and height in m
    var bmi = Math.floor(weight/(height*height));
    if(bmi<18.5){
        return ("Your BMI is " + bmi +", so you are underweight.");
    }
    else if(bmi>=18.5 && bmi<=24.9){
        return ("Your BMI is " + bmi +", so you have a normal weight.");
    }
    else {
        return ("Your BMI is " + bmi +", so you are overweight.");
    }
}
console.log(bmiCalculator(58, 1.73));
