import { Component, OnInit } from '@angular/core';
import {CategorieEntree, Entree} from "../services/instances.services";
import {EntreeService} from "../services/services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class EntreesComponent implements OnInit {

  categories: CategorieEntree[];

  entrees: Entree[];

  constructor(private service: EntreeService, private router: Router) { }

  ngOnInit() {
    this.entrees = this.service.entrees;
  }

  edit(index: number){
    this.router.navigate(['/entrees/edit/'+index]);
  }

  delete(index: number){
    this.service.delete(index);
    this.router.navigate(['/entrees']);
  }

}
