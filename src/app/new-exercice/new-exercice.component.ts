import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExerciceService} from '../services/services';
import {Exercices} from '../services/instances.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-exercice',
  templateUrl: './new-exercice.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class NewExerciceComponent implements OnInit {

  exerciceForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ExerciceService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  // @ts-ignore
  initForm(){
    this.exerciceForm = this.formBuilder.group(
        {
          date_debut : ['',Validators.required],
          date_fin: ['',Validators.required],
          montant: ['', Validators.required],
          montant_i: ['0']
        }
    );
  }

  onSubmit(){
    console.log("On envoit ce formulaire");
    const values = this.exerciceForm.value;
    const exo = new Exercices(values['date_debut'],values['date_fin'], parseInt(values['montant']), parseInt(values['montant_i']));
    this.service.save(exo);
    this.router.navigate(['/exercices']);
  }

}
