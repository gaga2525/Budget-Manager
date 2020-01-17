import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CatEntreeService, EntreeService} from "../services/services";
import {Entree} from "../services/instances.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-save-entree',
  templateUrl: './save-entree.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class SaveEntreeComponent implements OnInit {

  entreeForm: FormGroup;
  constructor(private service: EntreeService, private formBuilder: FormBuilder, private catService: CatEntreeService, private router: Router) { }

  ngOnInit() {
    this.initform();
  }

  initform() {
    this.entreeForm = this.formBuilder.group(
        {
          date: ['', Validators.required],
          montant: ['', Validators.required],
          categorie: ['', Validators.required]
        }
    )
  }

  onSubmit(){
    const values = this.entreeForm.value;
    const entree = new Entree(values['date'],values['montant'], this.catService.getCategorieById(values['categorie']));
    this.service.save(entree);
    this.router.navigate(['/entrees']);
  }

}
