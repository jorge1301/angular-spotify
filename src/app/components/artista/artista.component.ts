import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  loading: boolean;
  artista: any = [];
  tracks: any = [];
  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      this.spotify.getMusico(params.id)
        .subscribe(data => {
          this.artista = data;
          this.loading = false;
        });
      this.getTopTracks(params.id);
    });
  }

  ngOnInit() {
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(data => {
        this.tracks = data;
        console.log(this.tracks);
      });
  }

}
