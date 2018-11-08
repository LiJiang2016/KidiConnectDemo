import { Component } from '@angular/core';
import { IonicPage,NavController,AlertController,NavParams } from 'ionic-angular';
import {ForgetPwdPage} from "../forget-pwd/forget-pwd";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginData = {};
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams) {
    this.loginData = {
      login_title:"Sign In",
      login_email:"Email:",
      login_pwd:"Password:",
      login_fg:"Forgot password?",
      login_status:"Keep me signed in.",
      login_pp:"Privacy Policy",
      help_msg:"Enter the email address you used to sign up for Learning Lodge."
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  helpMsg(){
    let alert = this.alertCtrl.create({
      title:"",
      message:this.loginData['help_msg'],
      buttons:[{
        text:'OK',
        cssClass:'alert-btn block',
      }],
      cssClass:'alert-css',
    });
    alert.present();
  }

  fgPwd(){
    this.navCtrl.push('ForgetPwdPage');
  }
}
