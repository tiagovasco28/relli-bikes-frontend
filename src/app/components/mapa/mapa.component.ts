import { Component, OnInit } from '@angular/core';
import { AgmMap } from '@agm/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  lat = 41.578159659693625;
  lng = 2.003469122783097;
  mapType: any = "satellite";
  mapZoom = 17;

  constructor() { }

  ngOnInit(): void {
  }

}
