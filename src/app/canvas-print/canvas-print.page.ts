import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { BbbPage } from '../bbb/bbb.page';
import { CccPage } from '../ccc/ccc.page';


@Component({
  selector: 'app-canvas-print',
  templateUrl: './canvas-print.page.html',
  styleUrls: ['./canvas-print.page.scss'],
})
export class CanvasPrintPage implements OnInit {
  @ViewChild('mycanvas') canvas: any;
  canvasElement: any;
  coordinateX: number;
  coordinateY: number;
  qrCode:any;
  pltWidth = this.platform.width();

  constructor(
      public platform: Platform,
      public cc: CccPage, 
      // public bb: BbbPage
      ) {
    this.platform.ready().then(()=>{
      const ele = document.createElement('div');
      ele.style.setProperty('width',this.pltWidth);
    });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log(this.canvas);
    this.canvasElement = this.canvas.nativeElement;

    console.log("width: "+this.platform.width());
    console.log("height: "+this.platform.height());

    let ctx = this.canvasElement.getContext('2d');
    ctx.font = "15px Arial";
    ctx.textAlign = 'center';
    ctx.fillText("Hello World", this.canvasElement.width / 2, 30);

    var baseImg = new Image();
    baseImg.src = "./assets/download.jpeg";
    baseImg.width = 50;
    baseImg.height = 50;
    window.onload = () => {
      ctx.drawImage(baseImg, this.canvasElement.width / 2, 50, baseImg.width, baseImg.height);
    }
    // this.cc.randomQRCode();
    // this.qrCode = this.cc.qrData;

    // var imgdata = new Image();
    // imgdata.src = this.bb.qrImgSave;
    // window.onload = () => {
    // ctx.drawImage(imgdata,this.canvasElement.width / 2,60);}
  }


}
