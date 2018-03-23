import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  myForm: FormGroup;
  constructor(private authService: AuthService, private router: Router){}

  onSubmit() {
    const user = new User(this.myForm.value.username, this.myForm.value.password);
    this.authService.login(user)
      .subscribe(
        data => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId);
          this.router.navigateByUrl("/");
        },
        error => console.log(error)
        
      )
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
}