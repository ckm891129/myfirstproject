import { Component } from '@angular/core';
import { User } from './user';

const USERS = [
    new User("Jack", 20, "jack", 50, 178),
    new User("Jacky", 21, "jacky", 50, 180),
    new User("Jackie", 20, "jackie", 50, 160),
    new User("Jimmy", 26, "jimmy", 50, 180)
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "User informations";
  // user : User;
  selectedUser:User;

  // create a list of user
  users:Array<User>;
  isEditMode:Boolean = false;

  constructor(){
    this.selectedUser = USERS[0];
    this.users = USERS;
  }

  // constructor(){
  //   this.user = new User();
  //   this.user.name = "Jelly Bean"
  //   this.user.age = 30
  //   this.user.weight = 50
  //   this.user.height = 70
  // }



  onCheckAge(){
    // if (this.user.age >= 100)
    // user.ts the logic the user class
    // if (this.user.isOld())
    //   alert('Too old')
    // else
    //   alert('Ok')

    if (this.selectedUser.isOld())
      alert('Too old')
    else
      alert('Ok')
  }

  onCheckBMI(){
    // alert("BMI is : " + this.user.getBMI())
    alert("BMI is : " + this.selectedUser.getBMI())
  }
}
