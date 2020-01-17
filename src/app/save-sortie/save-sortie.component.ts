import { Component, OnInit } from '@angular/core';
import {CatSortieService, SortieService} from "../services/services";
import {Route, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Sortie} from "../services/instances.services";

@Component({
  selector: 'app-save-sortie',
  templateUrl: './save-sortie.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class SaveSortieComponent implements OnInit {

  sortieForm: FormGroup;
  id: number;

  constructor(private service: SortieService, private router: Router,
              private formBuilder: FormBuilder, private catService: CatSortieService) { }

  ngOnInit() {
    this.initform();
  }

  initform() {
    this.sortieForm = this.formBuilder.group(
        {
          date: ['', Validators.required],
          montant: ['', Validators.required],
          categorie: ['', Validators.required]
        }
    )
  }

  onSubmit(){
    const values = this.sortieForm.value;
    const sortie = new Sortie(values['date'], values['montant'], this.catService.getCategorieById(values['categorie']));
    this.service.save(sortie);
    this.router.navigate(['/sorties']);
  }

}
