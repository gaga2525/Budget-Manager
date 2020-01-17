import {Component, OnInit} from '@angular/core';
import {Sortie} from "../services/instances.services";
import {SortieService} from "../services/services";
import {Router} from "@angular/router";

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

  sorties: Sortie[];

  constructor(private service: SortieService, private router: Router) { }

  ngOnInit() {
    this.sorties = this.service.sorties;
  }

  edit(index: number) {
    this.router.navigate(['/sorties/edit/'+index]);
  }

  delete(index: number) {
    this.service.delete(+index);
    this.router.navigate(['/sorties']);
  }

}
