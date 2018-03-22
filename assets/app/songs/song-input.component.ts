import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { SongService } from "./song.service";
import { Song } from "./song.model";



@Component ({
      selector: 'app-song-input',
      templateUrl: './song-input.component.html',
     
})

export class SongInputComponent implements OnInit { 

       song: Song;
      
      constructor(private songService: SongService){}

      public onSubmit(form: NgForm){
            let body = form.value;
            if(this.song){
                  //Edit
                  this.song.title = body.title;
                  this.song.artist = body.artist;
                  this.song.group = body.group;
                  this.song.keySignature = body.keySignature;
                  this.song.url = body.url;
                  this.song.username = "Demo";
                  this.songService.updateSong(this.song)
                  .subscribe(
                        result => console.log(result)
                  );
                  this.song = null;
            } else {
                  //Create
                   const song: Song = new Song(body.title, body.artist, body.keySignature, body.group, body.url, "Demo");
                   this.songService
                     .addSong(song)
                     .subscribe(data => console.log(data), error => console.log(error));
            }
           
            form.resetForm();    
      }

      public ngOnInit() {
            this.songService.SongIsEdit.subscribe(
                  (song: Song)=> this.song = song
            );
      }

      public onClear(form: NgForm){
            this.song = null;
            form.resetForm();
      }
}