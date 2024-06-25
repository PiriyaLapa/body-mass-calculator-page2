export default class BmiCal {
  weight: number;
  height: number;

  constructor(weight: number, height: number) {
    this.weight = weight;
    this.height = height;
  }

  Imperial(): number {
    return (this.weight / Math.pow(this.height, 2)) * 703;
  }

  Metrix(): number {
    return this.weight / Math.pow(this.height,2);
  }

  GetHealthStatus(bmi: number): string {
    if (bmi < 18.5) {
      return "Underweight";
    }else if (bmi>= 18.5 && bmi <24.9){
        return "Normal weight";
    }else if (bmi >= 25 && bmi <29.9) {
        return "Overweight";
    }else {
        return "Obesity";
    }

  }
}


