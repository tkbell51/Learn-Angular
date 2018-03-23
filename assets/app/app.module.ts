import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from "./app.component";
import { SongComponent } from "./songs/song.component";
import { SongListComponent} from "./songs/song-list.component";
import { SongInputComponent } from './songs/song-input.component';
import { SongsComponent } from './songs/songs.component';
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { routing } from './app.routing';
import { LogoutComponent } from './auth/logout.component';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { AuthService } from './auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        SongComponent,
        SongListComponent,
        SongInputComponent,
        SongsComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule,
        HttpClientModule, 
        routing, 
        ReactiveFormsModule,
        
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}