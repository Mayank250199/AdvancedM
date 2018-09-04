import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MathProvider } from '../../providers/math/math';
import { Storage } from '@ionic/storage';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result:any;
  ops:{
      operation:any,
      expression:any
      };
  error:any;
  constructor(public navCtrl: NavController,public ms: MathProvider,private storage:Storage ) {

  }

   ionViewWillEnter(){
     this.storage.get('ops').then((val)=>{
       if(val != null){
        this.ops = JSON.parse(val);
       } else {
         this.ops = {
           operation:'factor',
           expression:'x^2-1'
         };
       }
        this.ms.getResults(this.ops.operation,this.ops.expression).subscribe(res=>{
            this.result=res;
        },err=>{
            this.error="Someting Went Wrong";
        });
         });
}

changeValue(){
  this.navCtrl.push(SettingsPage);
}

}
