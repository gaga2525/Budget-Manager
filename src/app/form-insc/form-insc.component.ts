import { Component, OnInit } from '@angular/core';
import { Users } from '../services/instances.services';
import { AuthService } from '../services/services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';

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
  userForm: FormGroup;

  constructor(private service: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initform();
  }

  initform(){
    this.userForm = this.formBuilder.group({
      nom: ['', Validators.required],
      login: ['', Validators.required],
      psw: ['', Validators.required],
      conf_psw: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

 onSubmit(){
  const values = this.userForm.value;
  const user: Users = new Users(values['nom'], values['login'], values['psw'], values['email']);
  this.service.save(user);
  this.router.navigate(['']);
 }
}
