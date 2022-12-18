import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-puvrecords',
  templateUrl: './puvrecords.page.html',
  styleUrls: ['./puvrecords.page.scss'],
})
export class PUVrecordsPage implements OnInit {

  records: any = [];
  dataFound = true;

  constructor(
    private authOb: AngularFireAuth,
    private fsDB: AngularFirestore
  ) { }

  ngOnInit() {
    this.fetchRecords();
  }

  fetchRecords(){
    this.authOb.currentUser.then((res)=>{
      this.fsDB.collection('users').doc(res.uid).collection('PUVrecords')
      .snapshotChanges().subscribe(r => {
        if (r.length === 0) {
          this.dataFound = false;
        }
        let tmp = [];
        r.forEach(puv => {
          tmp.push({ key: puv.payload.doc.id, ...puv.payload.doc.data() });
        })
        this.records = tmp;
        console.log(this.records);
      });
    })
  }

}
