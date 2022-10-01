import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
