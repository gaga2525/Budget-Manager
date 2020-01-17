import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-sortie',
  templateUrl: './cat-sortie.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class CatSortieComponent implements OnInit {

  categories = [];

  constructor() { }

  ngOnInit() {
  }

}
