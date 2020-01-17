import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class HomeComponent implements OnInit {

  dateDebut = '16/01/2017';
  dateFin = '27/03/2020';
  dateDay = '01/01/2020';
  resteJ = 86;

  constructor() { }

  ngOnInit() {
  }

}
