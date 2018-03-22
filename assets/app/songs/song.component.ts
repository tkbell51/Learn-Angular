import { Component, Input } from "@angular/core";

import { Song } from "./song.model";
import { SongService } from "./song.service";

@Component({
  selector: "app-song",
  templateUrl: "./song.component.html",
  styles: [
    `
        .author{
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config{
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `
  ]
})
export class SongComponent {
  @Input() song: Song;

  constructor(private songService: SongService) {}

  color = "red";

  keySig = [
    { value: "C", name: "C" },
    { value: "C#/Db", name: "C#/Db" },
    { value: "D", name: "D" },
    { value: "D#/Eb", name: "D#/Eb" },
    { value: "E", name: "E" },
    { value: "F", name: "F" },
    { value: "F#/Gb", name: "F#/Gb" },
    { value: "G", name: "G" },
    { value: "G#/Ab", name: "G#/Ab" },
    { value: "A", name: "A" },
    { value: "A#/Bb", name: "A#/Bb" },
    { value: "B", name: "B" }
  ];

  public onEdit() {
    this.songService.editSong(this.song);
  }

  onDelete() {
    this.songService.deleteSong(this.song)
      .subscribe(
        result => console.log(result)
      );
  }
}