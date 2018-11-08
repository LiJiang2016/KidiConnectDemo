import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForgetPwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-pwd',
  templateUrl: 'forget-pwd.html',
})
export class ForgetPwdPage {

  forget_data = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.forget_data = {
      title: "Forget Password"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPwdPage');
  }

}
