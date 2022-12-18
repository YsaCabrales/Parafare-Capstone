import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-record-puv',
  templateUrl: './record-puv.page.html',
  styleUrls: ['./record-puv.page.scss'],
})
export class RecordPuvPage implements OnInit {

  puvtype: any;
  drivername: any;
  license: any;

  constructor(
    private route: Router,
    private toastctrl: ToastController,
    private authOb: AngularFireAuth,
    private fsDB: AngularFirestore
  ) { }

  ngOnInit() {
  }

  recordPUV(){
    this.authOb.currentUser.then((res)=>{
      console.log(res);

      this.fsDB.collection('users').doc(res.uid).collection('PUVrecords').doc().set({
        puvtype: this.puvtype,
        drivername: this.drivername,
        licenseplate: this.license,
        recordedAt: Date.now(),
      }).then( () =>{
        this.successtoast();
        this.route.navigate(['/home']);
      });
    })
  }

  async successtoast(){
    await this.toastctrl.create({
      message: "Information successfully recorded.",
      duration: 4000,
    }).then(res => res.present());
  }

  seeRecords() {
    this.route.navigate(['/puvrecords']);
  }

  
}
