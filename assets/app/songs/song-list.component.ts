import { Component, OnInit } from "@angular/core";
import { Song } from "./song.model";
import { SongService } from "./song.service";

@Component({
  selector: "app-song-list",
  templateUrl: './song-list.component.html'

})
export class SongListComponent implements OnInit {
  public songs: Song[];

  constructor(private songService: SongService) {}

  ngOnInit(): void{
    this.songService.getSongs()
      .subscribe(
        (songs: Song[]) =>{
          this.songs = songs;
        }
      );
  }

}