import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController,
    private route: Router
    ) {}

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
          zoom: 5
        }),
      });
  
      //Update size of map to fix load error
      setTimeout(() => {
        map.updateSize();
      }, 1500);
    }

  goToSettings() {
    this.route.navigate(['/settings']);
  }

  commutingGuide() {
    this.route.navigate(['/commuting-guide']);
  }

  async laterAlert() {
    const alert = await this.alertController.create({
      header: 'Leaving Later at',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Jeepney',
          type: 'radio',
          value: 'jeepney',
        },
        {
          label: 'Tricycle',
          type: 'radio',
          value: 'tricycle',
        },
        {
          label: 'Bus',
          type: 'radio',
          value: 'bus',
        },
      ],
    });

    await alert.present();
  }
}
