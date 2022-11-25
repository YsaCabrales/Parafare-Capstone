import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

declare var mapboxgl: any;

@Component({
  selector: 'app-maps-apitest',
  templateUrl: './maps-apitest.page.html',
  styleUrls: ['./maps-apitest.page.scss'],
})
export class MapsAPItestPage {
// implements OnInit {
  @ViewChild("stepsModal")
  stepsModal: IonModal;
  openModal: boolean = false;
  start = [];
  end = [];
  map: any;
  mode: string = "driving";
  route: number = 1;
  routeloaded: boolean = false;
  distance: string = "";
  duration: string = "";
  steps: Array<any> = [];
  routeData: any;

  constructor(
  ) { }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    // mapboxgl.accessToken = 'pk.eyJ1IjoibmFneXlzYSIsImEiOiJjbGF3bWl2YTgwMnFwM3BtZmFldjk4OWdpIn0.b514twNwRSxm7TYe6rzBSg';
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoibmFneXlzYSIsImEiOiJjbGF3bWl2YTgwMnFwM3BtZmFldjk4OWdpIn0.b514twNwRSxm7TYe6rzBSg',
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [121.07449349702763,13.784116627407016],
      zoom: 14
    });

    this.map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
      );
  }

  // ngOnInit() {
  // }

}
