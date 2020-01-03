import { Component, OnInit } from '@angular/core';
import { Users } from '../services/instances.services';
import { AuthService } from '../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-insc',
  templateUrl: './form-insc.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.css']
})

export class FormInscComponent implements OnInit {

  nom = '';
  login = '';
  psw = '';
  confPsw = '';
  email = '';
  user: Users = new Users(this.nom, this.login, this.psw, this.email);

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  verificate(): boolean{
    // tslint:disable-next-line: triple-equals
    if(this.user.nomComplet == '' || this.user.login == '' || this.user.psw == '' || this.user.email == ''){
      return false;
    } else if(this.user.nomComplet == null || this.user.login == null || this.user.psw == null || this.user.email == null){
      return false;
    } else if (this.user.psw !== this.confPsw) {
      return false;
    }
    return true;
  }

  signup(){
    if(this.verificate()){
      this.auth.save(this.user);
      this.router.navigate(['']);
    } else {
      console.log('Inscription echoue');
    }
  }

}
