import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  user:any = {};
  pwdIcon = "eye-off-outline";
  showPwd = false;

  constructor(
    private route: Router,
    private authOb: AngularFireAuth,
    private rtDB: AngularFireDatabase,
    private toast: ToastController,
    ) { }

  ngOnInit() {
  }

  logIn() {
    this.route.navigate(['/login']);
  }

  terms() {
    this.route.navigate(['/term-and-conditions']);
  }

  privacy() {
    this.route.navigate(['/privacy-policy']);
  }

  registerAccount() {
    if (this.user.email && this.user.password){
      if (this.user.password == this.user.confirmpw){
      this.authOb.createUserWithEmailAndPassword(this.user.email, this.user.password).then( (res)=>{

        console.log(res);

        this.rtDB.object('users/' + res.user.uid).set({
          username: this.user.username,
          email: this.user.email,
          createdAt: Date.now(),
        }).then( () =>{
          this.route.navigate(['/login']);
        });

      }).catch(e => {
        console.log(e);
        var errorstring:string = e.toString();
        var error1:string = errorstring.replace('FirebaseError: Firebase: ', '');
        var error:string = error1.replace(/\(auth.*\)\.?/, '');
        this.errorToast(error);
      }
    )}else{
      var nomatch:string = "Passwords do not match.";
      this.errorToast(nomatch);
      console.log(nomatch);
    }
    }
  }

  async errorToast(error: string){
    await this.toast.create({
      message: error,
      duration: 4000,
    }).then(res => res.present());
  }

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-outline": "eye-off-outline";
  }

}
