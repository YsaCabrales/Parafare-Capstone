import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async changeUsername() {
    const alert = await this.alertController.create({
      header: 'Enter new username',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Change Username',
        }
        
      ],
    });

    await alert.present();
  }
}

