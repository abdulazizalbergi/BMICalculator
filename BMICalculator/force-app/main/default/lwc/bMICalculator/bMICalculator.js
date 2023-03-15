import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = '';
    weight = '';
    result = '';
    bmi ='';
    inputHandler(event){
        const {name,value} = event.target;
        if(name === 'height'){
            this.height = value;
        }
        if(name === 'weight'){
            this.weight = value;
        }

    }
    submitHandler(event){
        event.preventDefault();
        this.calculate();

    }
    calculate(){
        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        this.bmi = Number(bmi.toFixed(2));
        if(this.bmi < 18.5){
            this.result = 'Underweight';
        }else if(this.bmi >= 18.5 && this.bmi < 25){
            this.result = 'Healthy';
        }else if(this.bmi >= 25 && this.bmi >= 30){
            this.result = 'Overweight';
        }
        else this.result = 'Obese';
    }
    recalculate(){
        this.height = '';
        this.weight = '';
        this.result = '';
        this.bmi ='';
    }
}