import { calculateRectangle, addMessage } from './helpers';

class CalculatorItem {
  constructor(calculator) {
    this.calculator = calculator;

    this.square;
    this.rectangleX;
    this.rectangleY;

    if(!this.setVars()) return false;
    this.setEvents();
  }

  setVars() {
    this.messageElement = document.querySelector('[data-calculate-message]')
    this.messages = {
      newValues: 'Nowe wartości prostokąta to',
      notNumber: 'Można wpisywać tylko cyfry',
      toBig:     'Prostokąt musi posiadać mniejsze wartości niż kwadrat',
      toBigY:    'Wartość boku Y prostokąta nie może być większa niż wartość boku X'
    }

     return this.messageElement ? true : false;
  }

  setEvents() {
    this.calculator.addEventListener('input', e => this.setValues(e.target))
  }

  setValues(element) {

    const input = element.dataset.input;

    if (!input) return false;

    const inputValue = element.value
    const value = parseInt(inputValue)
    
    if(typeof(value) != 'number' || isNaN(value)) {
      this[input] = 0;
      addMessage(this.messageElement, this.messages.notNumber, true)
      return false;
    };

    this[input] = value;

    if(!this.square || !this.rectangleX || !this.rectangleY) return false;

    if(this.rectangleX >= this.square || this.rectangleY >= this.square) {
      addMessage(this.messageElement, this.messages.toBig, true);
      return false;
    }

    if(this.rectangleY > this.rectangleX) {
      addMessage(this.messageElement, this.messages.toBigY, true);
      return false;
    }

    this.calculate()
  }

  calculate() {

    const rectangle = {
      x: this.rectangleX,
      y: this.rectangleY
    }
    
    this.newValue = calculateRectangle(this.square, rectangle)

    addMessage(this.messageElement, `${this.messages.newValues}: x: ${this.newValue.x}, y: ${this.newValue.y}`)
  }

}

export default class Calculator {
  constructor() {
    if(!this.setItems()) return false;
    this.initItems()
  }

  setItems() {
    this.calculators = document.querySelectorAll('[data-calculator]');

    if(this.calculators.length == 0) return false;

    return true;
  }

  initItems() {
    this.calculators.forEach(calculator => new CalculatorItem(calculator))
  }
}