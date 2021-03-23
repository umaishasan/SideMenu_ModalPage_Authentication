import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ClasPage } from '../clas/clas.page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  id: number;
  name: string;
  class: string;
  clasid: string;
  selectuser: string;

  constructor(
    // public cccs:ClasPage, 
    public router:Router) { 
    
  }

  ngOnInit() {
  }

  workCheck(){
    console.log(this.name);
    this.router.navigateByUrl('/clas');
  }
}
