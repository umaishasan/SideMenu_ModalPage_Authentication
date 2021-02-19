import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-ccc',
  templateUrl: './ccc.page.html',
  styleUrls: ['./ccc.page.scss'],
})

export class CccPage implements OnInit {
  qrCode: string;
  studentID:string;

  constructor(public modalController: ModalController, public brqrCode: BarcodeScanner) { }

  ngOnInit() { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  randomQRCode() {
    var storedID = '';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var noumber = '0123456789';
    var punctuations = '!@#$%^&*()_+=-][{}|";:/?.><,';
    var combine = upper + lower + noumber + punctuations;
    var stringLangth = combine.length;
    for (var i = 0; i < 30; i++) {
      storedID += combine.charAt(Math.floor(Math.random()*stringLangth));
    }
    this.qrCode = storedID+this.studentID;
  }

}
