import { Component, OnInit } from '@angular/core';
import {CatSortieService, SortieService} from "../services/services";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Sortie} from "../services/instances.services";

@Component({
  selector: 'app-edit-sortie',
  templateUrl: './edit-sortie.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
    '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
    '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
    '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class EditSortieComponent implements OnInit {

  sortieForm: FormGroup;
  id: number;

  constructor(private service: SortieService, private router: Router,
              private formBuilder: FormBuilder, private catService: CatSortieService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.initform();
  }

  initform() {
    const sortie = this.service.sorties[+this.id];
    this.sortieForm = this.formBuilder.group(
        {
          date: [sortie.date, Validators.required],
          montant: [sortie.montant, Validators.required],
          categorie: [sortie.categorie.intitule, Validators.required]
        }
    )
  }

  onSubmit() {
    const values = this.sortieForm.value;
    const newSortie = new Sortie(values['date'], values['montant'],this.catService.getCategorieById(values['categorie']));
    this.service.edit(newSortie, this.id);
    this.router.navigate(['/sorties']);
  }
}
