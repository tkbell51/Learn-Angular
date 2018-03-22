export class Song {
      public title: string;
      public artist: string;
      public keySignature: string;
      public group: string;
      public url: string;
      public username: string;
      public songId?: string;
      public userId?: string;

      constructor(title: string, artist: string, keySignature: string, group: string, url: string, username: string, songId?: string, userId?: string){
            this.title = title;
            this.artist = artist;
            this.keySignature = keySignature;
            this.group = group;
            this.url = url;
            this.username = username;
            this.songId = songId;
            this.userId = userId;
      }
}