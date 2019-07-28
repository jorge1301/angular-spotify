import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
api: any;
  constructor(private http: HttpClient) {
    console.log('Servicio Listo para usarse');
   }

   getQuery(query: string) {
     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({
       Authorization: 'Bearer BQAzwt00zA9O83QhjY3a0WXO28WJ0X1hGXsYsmO1ttKhfBdxTx0uW1-t8Oj-hjILMmUVIt6I3-mSmtvq-_I'
     });
     return this.http.get(url, {headers});
   }

   getNewReleases() {
     return this.getQuery(`browse/new-releases`)
     .pipe(map(data => {
      return data['albums'].items;
     }));
   }

   getArtista(termino: string) {
     return this.getQuery(`search?q=${ termino }&type=artist`)
     .pipe(map(data => {
       return data['artists'].items;
     }));
   }

   getMusico(id: string){
     return this.getQuery(`artists/${id}`);
   }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe(map(data => {
      return data['tracks'];
    }));
  }
}
