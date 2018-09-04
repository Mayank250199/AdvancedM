import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
operation:any;
expression:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage) {

    this.operation='factor';
    this.expression='x^2-1'

    this.storage.get('ops').then((val) => {
       if(val != null){
         let ops = JSON.parse(val);
         this.operation = ops.operation;
         this.expression = ops.expression;
       } else {
         this.operation = 'factor';
         this.expression = 'x^2-1';
       }
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    let ops = {
      operation: this.operation,
      expression: this.expression
    }
    this.storage.set('ops', JSON.stringify(ops));
    this.navCtrl.push(HomePage);
  }


}
