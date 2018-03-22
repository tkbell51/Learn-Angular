import { Component } from "@angular/core";

@Component({
  selector: "app-songs",
  template: `
            <div class="row">
            <app-song-input></app-song-input>
      </div>
      <hr>
      <div class="row">
            <app-song-list></app-song-list>
      </div>
      `,
  styles: [` `]
})
export class SongsComponent {}