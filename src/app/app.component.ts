import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female'];
  defaultGender = 'Female';
  // onSubmit(form: NgForm){
  //   console.log(form);
  //   console.log(form.value);
  // }
  onSubmit(){
    console.log(this.signUpForm);
  }
}
