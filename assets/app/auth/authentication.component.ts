import { Component } from "@angular/core";


@Component({
  selector: "app-authentication",
  template: `
            <header class="row spacing">
              <nav class="col-md-8 col-md-offset-2">
                    <ul class="nav nav-tabs">
                          <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
                          <li routerLinkActive="active"><a [routerLink]="['login']">Login</a></li>
                          <li routerLinkActive="active"><a [routerLink]="['logout']">Logout</a></li>
                    </ul>
              </nav>    
            </header>
          <div class="row spacing">
                <router-outlet></router-outlet>
          </div>
      `,
  styles: [` `]
})
export class AuthenticationComponent {}