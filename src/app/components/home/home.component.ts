import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: Array<object> = [];
  loading: boolean;
  err: boolean;
  mensajeError: any;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.err = false;

    this.spotify.getNewReleases()
      .subscribe(data => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
          this.mensajeError = errorServicio.error.error.message;
          this.err = true;
          this.loading = false;
    });
  }

  ngOnInit() {

  }

}
