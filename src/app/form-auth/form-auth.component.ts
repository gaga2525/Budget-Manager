import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/services';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css']
})
export class FormAuthComponent implements OnInit {
  login: string;
  psw: string;
  reponse: boolean;
  authForm: FormGroup;

  constructor(private service: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.initform();
  }

  initform(){
    this.authForm = this.formBuilder.group({
      login: ['', Validators.required],
      psw: ['', Validators.required]
    })
  }

  onSubmit() {
    const values = this.authForm.value;
    this.reponse = this.service.connect(values['login'], values['psw']);
    if(this.reponse) this.router.navigate(['']);
  }

  disconnect() {
    this.service.deconnect();
  }
}
