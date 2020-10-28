// import { Component, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   @ViewChild('f') signUpForm: NgForm;
//   defaultQuestion = 'pet';
//   answer = '';
//   genders = ['Male', 'Female'];
//   defaultGender = 'Female';
//   user = {
//     username: '',
//     email: '',
//     secretQuestion: '',
//     answer: '',
//     gender: ''
//   };
//   submitted = false;
//   // onSubmit(form: NgForm){
//   //   console.log(form);
//   //   console.log(form.value);
//   // }
//   suggestedUserName() {
//     const suggestedName = 'ShivamPatel251097';
//     //setvalue used for  changing all values
//     // this.signUpForm.setValue({
//     //   userData: {
//     //     username: suggestedName,
//     //     email: 'shibbu251097@gmail.com'
//     //   },
//     //   secret: 'pet',
//     //   questionAnswer: 'Rabbit',
//     //   gender: 'Male'
//     // });
//     //patch value to overwrite only 1 value.
//     this.signUpForm.form.patchValue({
//       userData: {
//         username: suggestedName
//       }
//     });
//   }

//   onSubmit(){
//     console.log(this.signUpForm);
//     this.submitted = true;
//     this.user.username = this.signUpForm.value.userData.username;
//     this.user.email = this.signUpForm.value.userData.email;
//     this.user.gender = this.signUpForm.value.gender;
//     this.user.answer = this.signUpForm.value.questionAnswer;
//     this.user.secretQuestion = this.signUpForm.value.secret;
//     this.signUpForm.reset();
//   }
// }


// reactive approach in forms

import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby(){
  const control = new FormControl(null, Validators.required);
  (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls(){
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
