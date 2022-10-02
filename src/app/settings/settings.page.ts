import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private route: Router,
    private authOb: AngularFireAuth,
    ) { }

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

  logout() {
    this.authOb.signOut().then( ()=>{

      this.route.navigate(['/login']);

    }).catch(e =>{
      console.log(e);
    })
  }
}



