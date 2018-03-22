import { Component } from '@angular/core';
import { Song } from './songs/song.model';
import { SongService } from './songs/song.service';



@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  providers: [SongService]
})
export class AppComponent {
  
}