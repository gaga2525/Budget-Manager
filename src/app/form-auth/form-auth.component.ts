import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css']
})
export class FormAuthComponent implements OnInit {

  login: string;
  psw: string;
  reponse: boolean;

  constructor(private service: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  connect() {
    this.reponse= this.service.connect(this.login, this.psw);
    if(this.reponse) {
      console.log('connected');
      this.router.navigate(['']);
    } else {
      console.log('Not connected');
    }
  }

  disconnect(){
    this.service.deconnect();
  }

}
