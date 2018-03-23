import { Song } from "./song.model";

import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";


import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class SongService {
  private songs: Song[] = [];

   SongIsEdit = new EventEmitter<Song>();

  constructor(private httpClient: HttpClient) {}

  addSong(song: Song): Observable<Song> {
    console.log(song);
    
      const token = localStorage.getItem("token") ? "?token=" + localStorage.getItem("token") : "";  
    return this.httpClient
      .post<Song>("http://localhost:3000/song", song)
      .map((result: any) => {
        
        const newSong = new Song(
          result.obj.title,
          result.obj.artist,
          result.obj.keySignature,
          result.obj.group,
          result.obj.url,
          "Demo",
          result.obj._id,
          "123"
        );
        this.songs.push(newSong);
        return newSong;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }

   getSongs(): Observable<Song[]> {
    return this.httpClient.get<Song[]>("http://localhost:3000/song")
      .map((result: any) => {
        const transformedSongs: Song[] = [];
        for (const song of result.obj) {
          transformedSongs.push(
            new Song(
              song.title,
              song.artist,
              song.keySignature,
              song.group,
              song.url,
              "Demo",
              song._id,
              null
            )
          );
        }
        this.songs = transformedSongs;
        return transformedSongs;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }
  editSong(song: Song) {
        this.SongIsEdit.emit(song);
  }

  updateSong(song: Song){
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.httpClient.patch<Song>('http://localhost:3000/song/' + song.songId + token, song)
            .catch((error: HttpErrorResponse) => {
                return Observable.throw(error);
  });
}
  deleteSong(song: Song) {
    this.songs.splice(this.songs.indexOf(song), 1);

    const token = localStorage.getItem("token") ? "?token=" + localStorage.getItem("token") : "";
    return this.httpClient.delete<Song>("http://localhost:3000/song/" + song.songId + token)
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }
}