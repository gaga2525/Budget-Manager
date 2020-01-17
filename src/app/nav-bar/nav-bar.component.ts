import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  './nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
