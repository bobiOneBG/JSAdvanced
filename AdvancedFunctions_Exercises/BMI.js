function bmi(name, age, weight, heightCM) {
    let status;

    let height = heightCM / 100;

    let bmi = Math.round(weight / Math.pow(height, 2));

    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = 'normal';
    } else if (bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    }

    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: heightCM
        },
        BMI: bmi,
        status: status
    };
    if (status === 'obese') {
        obj.recommendation = "admission required";
    }
    return obj;
}

bmi('Kotooshu', 33, 152, 203);