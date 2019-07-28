import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artista: Array<object> = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {

  }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;
    if (termino) {
      this.spotify.getArtista(termino)
      .subscribe( data => {
        this.artista = data;
        this.loading = false;
      });
    }
  }
}
