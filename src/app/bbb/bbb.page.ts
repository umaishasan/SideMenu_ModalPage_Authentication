import { Component, Injectable, OnInit} from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { CccPage } from '../ccc/ccc.page';
import { ModalPagePage } from '../modal-page/modal-page.page';

Injectable({
  providedIn: 'any'
})
@Component({
  selector: 'app-bbb',
  templateUrl: './bbb.page.html',
  styleUrls: ['./bbb.page.scss'],
})
export class BbbPage implements OnInit {
  qrCode: any;
  qrImgSave:any;

  constructor(
    public modalController: ModalController, 
    public cc: CccPage, 
    public platform: Platform
  ) {
    this.cc.randomQRCode();
    this.qrCode = this.cc.qrData;

    this.platform.ready().then(()=>{
      console.log('width: '+platform.width());
      console.log('height: '+platform.height());
      const el = document.querySelector('ion-card');
      el.style.setProperty('width',platform.width());
      var a = el.lastChild.lastChild.lastChild;
      this.qrImgSave = a.childNodes;
      console.log(this.qrImgSave);
    });

  }

  ngOnInit() { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  check(){
    var s = document.createElement('img');
    s.src = this.qrImgSave;
  }
  
}