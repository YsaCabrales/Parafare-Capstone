import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

@Component({
  selector: 'app-maps-apitest',
  templateUrl: './maps-apitest.page.html',
  styleUrls: ['./maps-apitest.page.scss'],
})
export class MapsAPItestPage implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    var map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }) ],
      target: 'map',
      view: new View({
        center: [0, 0],
        maxZoom: 18,
        zoom: 12
      }),
    });

    //Update size of map to fix load error
		setTimeout(() => {
			map.updateSize();
		}, 1500);
  }

}
