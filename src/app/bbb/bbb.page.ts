import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CccPage } from '../ccc/ccc.page';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-bbb',
  templateUrl: './bbb.page.html',
  styleUrls: ['./bbb.page.scss'],
})
export class BbbPage implements OnInit {
qrCode:string;

  constructor(public modalController: ModalController, public cc:CccPage) {
    this.cc.randomQRCode();
    this.qrCode = this.cc.qrData;
  }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
