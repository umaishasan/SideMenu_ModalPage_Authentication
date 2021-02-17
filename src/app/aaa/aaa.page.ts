import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.page.html',
  styleUrls: ['./aaa.page.scss'],
})
export class AAAPage implements OnInit {
  abc:string;
  show1:boolean = false;
  show2:boolean = false;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  // selectUser(){
  //   if(this.abc === "a"){
  //     document.getElementById('show1').style.display = 'block';
  //   }
  //   else if(this.abc === "b"){
  //     document.getElementById('show2').style.display = 'block';
  //   }
  // }

  selectUser(){
    if(this.abc === "a"){
      this.show1 = true;
      this.show2 = false;
    }
    else if(this.abc === "b"){
      this.show2 = true;
      this.show1 = false;
    }
  }

}
