import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    name: '',
    pass: ''
  };

  constructor(private auth:AuthService,public route:Router,public alertCtrl:AlertController) { }

  ngOnInit() {
  }

  signIn(){
    this.auth.login(this.user.name,this.user.pass).then(success =>{
      if(success){
        this.route.navigateByUrl('/folder/Inbox');
      }
      else{
        this.errorMessage();
      }
    });
  }

  async errorMessage(){
    const er = await this.alertCtrl.create({
      cssClass: 'myClass',
      header: 'Alert',
      subHeader: 'Login Failed',
      message: 'Incorrect Username or Password',
      buttons: ['OK']
    });
    await er.present();
  }

}
