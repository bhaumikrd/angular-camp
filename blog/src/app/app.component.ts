import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Angular StepByStep';

  keyValues = '';
  onKey(event: any) { // without type info
    this.keyValues += event.target.value + ' | ';
    console.log(this.keyValues);
  }

  clickValues ="";
  onClick(eventValue: any) { // without type info
    this.clickValues += eventValue + ' | ';
    console.log(this.clickValues);
  }
}


