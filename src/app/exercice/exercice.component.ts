import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../services/services';
import { Exercices } from '../services/instances.services';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
  '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
  '../../../assets/template/dist/css/adminlte.min.css',
  ]
})
export class ExerciceComponent implements OnInit {

  exercices: Exercices[];

  constructor(private service: ExerciceService, private classExe: Exercices) { }

  ngOnInit() {
    this.exercices = this.service.exercices;
  }

}
