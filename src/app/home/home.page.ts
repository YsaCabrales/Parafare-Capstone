import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

declare var mapboxgl: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any = [];
  @ViewChild("stepsModal")
  stepsModal: IonModal;
  openModal: boolean = false;
  start = [];
  end = [];
  map: any;
  mode: string = "driving";
  routes: number = 1;
  routeloaded: boolean = false;
  distance: string = "";
  duration: string = "";
  steps: Array<any> = [];
  routeData: any;

  constructor(
    private alertController: AlertController,
    private route: Router,
    private fsDB: AngularFirestore,
    private authOb: AngularFireAuth
    ) {}

    ngOnInit() {
      this.userData();
    }

    ionViewDidEnter() {
      this.loadMap();
    }

    loadMap() {
      this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoibmFneXlzYSIsImEiOiJjbGF3bWl2YTgwMnFwM3BtZmFldjk4OWdpIn0.b514twNwRSxm7TYe6rzBSg',
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [121.0593968,13.7565229],
        zoom: 12.5
      });
    }

    locateUser() {
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
  

  goToSettings() {
    this.route.navigate(['/settings']);
  }

  commutingGuide() {
    this.route.navigate(['/commuting-guide']);
  }

  userData(){
    // this.authOb.currentUser.then( (user)=>{
    //   const userID = user.uid;
    //   console.log(user);
    //   this.fsDB.collection('users').doc(userID).snapshotChanges().subscribe( res =>{
    //     console.log(res);
    //   })
    // })
    this.fsDB.collection("users").get().subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.users.push(doc.data());
      });
    });
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
