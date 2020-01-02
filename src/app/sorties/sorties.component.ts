import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorties',
  templateUrl: './sorties.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class SortiesComponent implements OnInit {

  sorties = [
    {
      id:1,
      date:'2019-12-31',
      categorie:'Nouritures et aliments',
      montant:17000
    },
    {id:2,
      date:'2019-12-30',
      categorie:'Ergonomie',
      montant:17800
    },
    {id:3, date:'2019-12-29', categorie:'Detente', montant:60000},
    {id:4, date:'2019-12-28', categorie:'Dons de Charité', montant:200000},
    {id:5, date:'2019-12-27', categorie:'Maintenance', montant:87000},
  ]

  constructor() { }

  ngOnInit() {
  }

}
