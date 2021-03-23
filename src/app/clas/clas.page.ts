import { Component, OnInit } from '@angular/core';
// import { AdminPage } from '../admin/admin.page';

interface Classes {
  Cid: string;
  Cname: string;
  stuName: any[];
}
// interface StudentsName {
//   id: number;
//   name: string;
// }
@Component({
  selector: 'app-clas',
  templateUrl: './clas.page.html',
  styleUrls: ['./clas.page.scss'],
})
export class ClasPage implements OnInit {
  chooseId: string;
  saveVal1: {Cid:number,Cname:string,studentName:[]}[];
  class: Classes[];
  class1:any = [{id:1,name:'Ali'},{id:2,name:'Ahmed'},{id:3,name:'Ahmer'},{id:4,name:'Arsalan'},{id:5,name:'Amna'}];
  class2 = ['Babar','Bakar','Bashir','Babu','Banu'];

  constructor() {
    this.saveVal1 = [{Cid: 1,Cname: 'Class 1',studentName:this.class1}];
    console.log(this.saveVal1);
    // this.class = [{Cid: 'A02',Cname: 'Class 2',stuName:this.class2}];
    // console.log(this.class);
  }

  ngOnInit() {
  }

  check(){
    // for(var i=1;i<=10;i++){
    //   // console.log(this.Class);
    //   this.Class = [{Cid: 'A0'+i,Cname: 'Class '+i}]
    //   if((this.chooseId == 'A01') && (this.Class.findIndex(a=>{a.Cid='A01',a.Cname='Class 1'}))){
    //     this.class1;
    //     console.log(this.class1);
    //   }
    //   else if((this.chooseId == 'A02') && (this.Class.findIndex(a=>{a.Cid='A02',a.Cname='Class 2'}))){
    //     this.class2;
    //     console.log(this.class2);
    //   }
    // console.log(saveVal1);
    }
    // console.log(this.Class);
  

}
