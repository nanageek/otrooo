import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MiapiProvider } from '../../providers/miapi/miapi'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
elementos:any
  constructor(public navCtrl: NavController, public miapi: MiapiProvider) {
  miapi.getArticulos()
    .subscribe((out)=>{
      this.elementos = out["data"]
      console.log(this.elementos)
    })
  }

}
