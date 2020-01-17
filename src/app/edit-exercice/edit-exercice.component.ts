import { Component, OnInit } from '@angular/core';
import {ExerciceService} from "../services/services";
import {Exercices} from "../services/instances.services";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-exercice',
  templateUrl: './edit-exercice.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
     '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
     '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
     '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class EditExerciceComponent implements OnInit {
  exercice: Exercices;
  exerciceForm: FormGroup;
  id: number;
  constructor(private service: ExerciceService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = +id;
    this.exercice = this.service.exercices[+id];
    this.initform();
  }

  initform(){
    this.exerciceForm = this.formBuilder.group(
        {
            date_debut: [this.exercice.dateDebut,Validators.required],
            date_fin: [this.exercice.dateFin, Validators.required],
            montant: [this.exercice.montantBudgetaire, Validators.required],
            montant_i: [this.exercice.montantInit],
            observation: [this.exercice.observation]
        }
    )
  }

  onSubmit(){
    const values = this.exerciceForm.value;
    let newExo: Exercices = new Exercices(values['date_debut'], values['date_fin'], values['montant'], values['montant_i']);
    newExo.observation = values['observation'];
    this.service.edit(newExo, this.id);
    this.router.navigate(['/exercices']);
  }

}
