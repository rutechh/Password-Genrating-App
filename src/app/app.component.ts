import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'passwordGeneratingApp';

  _length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this._length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onchangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onchangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmonpqrstuvwxyz"
    const symbols = "!@#$%^&*()";

    let validChars = '';
    if (this.includeLetters){
      validChars += letters;
    }

    if (this.includeNumbers){
      validChars += numbers;
    }

    if (this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this._length; i++) {
      const _index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[_index];

      console.log(generatedPassword);
    }
    this.password = generatedPassword;
    }
}
