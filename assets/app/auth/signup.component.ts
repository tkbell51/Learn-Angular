
import {  FormControl, Validators, FormGroup, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";


@Component({
      selector: 'app-signup',
      templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit{
      myForm: FormGroup;

      onSubmit(){
            console.log(this.myForm);
            this.myForm.reset();
      }

      ngOnInit(){
            this.myForm = new FormGroup({
              firstName: new FormControl(null, Validators.required),
              lastName: new FormControl(null, Validators.required),
              username: new FormControl(null, Validators.required),
              email: new FormControl(null, [
                Validators.required,
                Validators.email
              ]),
              password: new FormControl(null, Validators.required)
            });
      }


}