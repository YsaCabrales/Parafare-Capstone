import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any = {};
  pwdIcon = "eye-off-outline";
  showPwd = false;

  constructor(
    private route: Router,
    private authOb: AngularFireAuth,
    private alertController: AlertController,
    private toast: ToastController,
    ) { }

  ngOnInit() {
  }

  loginToAccount() {
    this.authOb.signInWithEmailAndPassword(this.user.email, this.user.password). then( (res)=>{
      console.log(res);

      this.route.navigate(['/home']);

    }).catch( e =>{
      console.log(e);
      var errorstring:string = e.toString();
      var error1:string = errorstring.replace('FirebaseError: Firebase: ', '');
      var error:string = error1.replace(/\(auth.*\)\.?/, '');
      this.errorToast(error);
    })
  }

  async errorToast(error: string){
    await this.toast.create({
      message: error,
      duration: 4000,
    }).then(res => res.present());
  }

  signUp() {
    this.route.navigate(['/sign-up']);
  }

  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Reset Password',
      subHeader: 'Enter email to reset your password',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          handler: (data: any) => {
            if(data.email){
              this.authOb.sendPasswordResetEmail(data.email).then( (res)=>{
                console.log("Email Reset");
              }).catch(e=>{
                console.log(e);
              })
            }
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Email',
          name: "email",
	        type: "text",
        }
        
      ],
    });

    await alert.present();
  }
 
  guestLogin() {
    this.signInAnonymously().then(
      (res) => {
        console.log(res);
        this.route.navigate(['/home']);
      }
    ).catch(e => {
      console.log(e);
    })
  }

  private signInAnonymously() {
    return new Promise<any>((resolve, reject) => {
      this.authOb.signInAnonymously().then((data) => {
        resolve(data);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(`login failed ${error.message}`);
        // ...
      });
    });
  }

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-outline": "eye-off-outline";
  }
}
