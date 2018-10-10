import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MiapiProvider } from '../../providers/miapi/miapi'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public miapi: MiapiProvider) {
  miapi.getArticulos()
    .subscribe((out)=>{console.log(out)})
  }

}
