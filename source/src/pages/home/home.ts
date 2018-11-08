import {Component} from '@angular/core';
import {IonicPage,NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [];
  home = {};
  loginPage: any;
  constructor(public navCtrl: NavController) {
    this.slides = [
      {
        title: "Welcome to KidiConnect",
        description: "KidiConnect is a chat app that lets you share messages with a child's Vtech toy.",
        image: "assets/imgs/kc1.jpg",
      },
      {
        title: "Share Texts,Photos & More",
        description: "Send text messages,voice messages,photos,drawings,and animated stickers to the special children in your life.",
        image: "assets/imgs/kc2.jpg",
      },
      {
        title: "Fun for the Whole Family",
        description: "Chat with the whole family in a group chat room.",
        image: "assets/imgs/kc3.jpg",
      }
    ];
    this.home = {
      prompt_text: "You need a Learning Lodge Account to sign in.",
      signIn_btn: "Sign In",
      signUp_btn: "Sign Up for Learning Lodge",
    };
    this.loginPage = 'LoginPage';
  }
}
