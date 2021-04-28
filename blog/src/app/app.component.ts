import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Angular StepByStep';

  name = "Bhaumik";
  disabledBox = true;
  enableBox(){
    this.disabledBox=false;
  }
}


