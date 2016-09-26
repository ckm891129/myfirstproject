import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "This is my title";
  user : User;
  isEditMode:Boolean = false;

  constructor(){
    this.user = new User();
    this.user.name = "Jelly Bean"
    this.user.age = 30
    this.user.weight = 50
    this.user.height = 70
  }

  onCheckAge(){
    // if (this.user.age >= 100)
    // user.ts the logic the user class
     if (this.user.isOld())
      alert('Too old')
    else
      alert('Ok')
  }

  onCheckBMI(){
    alert("BMI is : " + this.user.getBMI())
  }
}
