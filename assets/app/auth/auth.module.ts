import { NgModule } from "@angular/core";
import { LogoutComponent } from "./logout.component";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { authRouting } from "./auth.routing";

@NgModule({
  declarations: [
        LogoutComponent, 
        LoginComponent, 
        SignupComponent
      ],
      imports: [
            CommonModule,
            ReactiveFormsModule,
            authRouting
      ]
})
export class AuthModule {

}