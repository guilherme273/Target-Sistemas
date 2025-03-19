import express, { Application } from "express";

class App {
  private app: Application;
  private index: number = 13;
  private sum: number = 0;
  private k: number = 0;

  constructor() {
    this.app = express();
  }

  listenServer(): void {
    this.app.listen(3000, () => console.log("Server is running!"));
  }

  runningQuestionOne(): void {
    while (this.k < this.index) {
      this.k++;
      this.sum += this.k;
      console.log("Value on loop:", this.sum);
    }
    console.log("Value after loop:", this.sum);
  }

  isFibonacci(num: number): boolean {
    let a = 0,
      b = 1;
    while (b < num) {
      [a, b] = [b, a + b];
    }
    return b === num || num === 0;
  }

  runningQuestionTwo(num: number): void {
    console.log(
      `${num} ${
        this.isFibonacci(num) ? "belongs" : "does not belong"
      } to the Fibonacci sequence.`
    );
  }

  runningQuestionThree(revenueData: { dia: number; valor: number }[]): void {
    const validDays = revenueData.filter((day) => day.valor > 0);
    if (validDays.length === 0) return console.log("No valid revenue data.");

    const revenues = validDays.map((day) => day.valor);
    const minRevenue = Math.min(...revenues);
    const maxRevenue = Math.max(...revenues);
    const avgRevenue =
      revenues.reduce((sum, valor) => sum + valor, 0) / validDays.length;
    const daysAboveAvg = validDays.filter(
      (day) => day.valor > avgRevenue
    ).length;

    console.log(`Lowest revenue: ${minRevenue}`);
    console.log(`Highest revenue: ${maxRevenue}`);
    console.log(`Days with revenue above average: ${daysAboveAvg}`);
  }

  runningQuestionFour(stateRevenues: { [key: string]: number }): void {
    const totalRevenue = Object.values(stateRevenues).reduce(
      (sum, value) => sum + value,
      0
    );
    console.log("Revenue percentage by state:");
    Object.entries(stateRevenues).forEach(([state, revenue]) => {
      console.log(`${state}: ${((revenue / totalRevenue) * 100).toFixed(2)}%`);
    });
  }

  runningQuestionFive(inputString: string): void {
    console.log(`Original: ${inputString}`);
    console.log(`Reversed: ${inputString.split("").reverse().join("")}`);
  }
}

const app = new App();
app.listenServer();
app.runningQuestionOne();
app.runningQuestionTwo(21);

const revenueData = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
  { dia: 11, valor: 0.0 },
  { dia: 12, valor: 0.0 },
  { dia: 13, valor: 3847.4823 },
  { dia: 14, valor: 373.7838 },
  { dia: 15, valor: 2659.7563 },
  { dia: 16, valor: 48924.2448 },
  { dia: 17, valor: 18419.2614 },
  { dia: 18, valor: 0.0 },
  { dia: 19, valor: 0.0 },
  { dia: 20, valor: 35240.1826 },
  { dia: 21, valor: 43829.1667 },
  { dia: 22, valor: 18235.6852 },
  { dia: 23, valor: 4355.0662 },
  { dia: 24, valor: 13327.1025 },
  { dia: 25, valor: 0.0 },
  { dia: 26, valor: 0.0 },
  { dia: 27, valor: 25681.8318 },
  { dia: 28, valor: 1718.1221 },
  { dia: 29, valor: 13220.495 },
  { dia: 30, valor: 8414.61 },
];

app.runningQuestionThree(revenueData);

const stateRevenues = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

app.runningQuestionFour(stateRevenues);
app.runningQuestionFive("Hello, World!");

function teste() {
  let sum = 0;
  let n = [20, 8, 32, 40, 35, 11, 43, 11, 32, -16];
  n.forEach((x) => {
    sum += x;

    if (sum >= 100) {
      sum = 0;
    }
  });
  console.log(sum);
}

teste();
