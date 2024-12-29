let weightVal = $('.weightVal');
let heightVal = $('.heightVal');
let submit = $('.submit');
let res = $('p');

submit.click(function(a) {
    a.preventDefault();

    let weight = parseFloat(weightVal.val());
    let height = parseFloat(heightVal.val()) / 100; 

    if(isNaN(weight) || isNaN(height) || height <= 0) {
        res.text('Please Enter Number Value!').css('color', 'red')
        return;
    }
 
    let finalBmi = (weight / (height * height));

    let bmiCat = ''
    if(finalBmi <= 18.4) {
        bmiCat = 'Underweight'
    } else if(finalBmi > 18.5 && finalBmi < 24.9) {
        bmiCat = 'Normal Weight'
    } else if(finalBmi > 25 && finalBmi < 29.9) {
        bmiCat = 'OverWeight'
    } else if(finalBmi > 30 && finalBmi < 34.9) {
        bmiCat = 'Obesity Class | (Moderate)'
    } else if(finalBmi > 35 && finalBmi < 39.9) {
        bmiCat = 'Obesity Class || (Severe)'
    } else {
        bmiCat = 'Obesity Class ||| (Very Severe of morbid obesity)'
    }
    
    res.text(`Your BMI is ${finalBmi.toFixed(2)} & your class is ${bmiCat}`).css({
        'font-family': 'cursive',
        'font-style': 'italic',
        'font-size': '15px',
        'padding-left': '25px',
        'padding-right': '25px'

    })


});