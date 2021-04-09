import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Angular StepByStep'
  name = 'Bhaumik D'
  getName(){
    return this.name;
  }
  obj = {
    name : "Bhaumik D",
    age : 30
  }
  arr = ['Bhaumik', 'Ramesh', 'Dhandhukia']
  a = 100
  b = 200
  siteUrl = window.location.href;
}