import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SongComponent } from "./song.component";
import { SongInputComponent } from "./song-input.component";
import { SongListComponent } from "./song-list.component";
import { SongsComponent } from "./songs.component";
import { SongService } from "./song.service";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
      declarations: [
            SongComponent,
        SongListComponent,
        SongInputComponent,
        SongsComponent,
      ],
      imports: [
            CommonModule,
            FormsModule
      ],
      providers: [SongService]
})
export class SongModule{

}