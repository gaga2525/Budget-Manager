import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CatEntreeService, EntreeService} from "../services/services";
import {CategorieEntree, Entree} from "../services/instances.services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-entree',
  templateUrl: './edit-entree.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
    '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
    '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
    '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class EditEntreeComponent implements OnInit {

  entreeForm: FormGroup;
  id: number;

  constructor(private service: EntreeService, private router: Router,
              private catService: CatEntreeService, private formBuilder: FormBuilder,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.initform();
  }

  initform() {
    let entree = this.service.entrees[this.id];
    this.entreeForm = this.formBuilder.group(
        {
          date: [entree.date, Validators.required],
          montant: [entree.montant, Validators.required],
          categorie: [entree.categorie.intitule, Validators.required]
        }
    )
  }

  onSubmit() {
    const values = this.entreeForm.value;
    const newEntree = new Entree(values['date'], values['montant'], this.catService.getCategorieById(values['categorie']));
    this.service.edit(newEntree,this.id);
    this.router.navigate(['/entrees']);
  }

}
