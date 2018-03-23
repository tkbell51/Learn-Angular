
import {  FormControl, Validators, FormGroup, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { User } from "./user.model";


@Component({
      selector: 'app-signup',
      templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit{
      myForm: FormGroup;

      constructor(private authService: AuthService){}

      onSubmit(){
            const user = new User(
                  this.myForm.value.username,
                   this.myForm.value.firstName,
                    this.myForm.value.lastName,
                     this.myForm.value.email,
                      this.myForm.value.password
                  );
                  this.authService.signup(user)
                        .subscribe(
                              data => console.log(data),
                              error => console.log(error)
                        )
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