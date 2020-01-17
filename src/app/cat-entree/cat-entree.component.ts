import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-entree',
  templateUrl: './cat-entree.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class CatEntreeComponent implements OnInit {

  categories = [];

  constructor() { }

  ngOnInit() {
  }

}
