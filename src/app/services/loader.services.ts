import { Users, Exercices, Entree, Sortie, CategorieEntree, CategorieSortie } from './instances.services';
import { OnInit } from '@angular/core';

export class LoaderService implements OnInit {
    users: Users[];
    exercices: Exercices[];
    entrees: Entree[];
    sorties: Sortie[];
    catEntree: CategorieEntree[];
    catSortie: CategorieSortie[];
    datas = localStorage;

    constructor() {
        this.loadAll();
    }

    ngOnInit(): void {

    }

    loadUsers() {
        let data = this.datas.getItem("users");
        this.users = JSON.parse(data);
    }

    loadExercices() {
        let data = this.datas.getItem("exercices");
        this.users = JSON.parse(data);
    }

    loadEntrees() {
        let data = this.datas.getItem("entrees");
        this.users = JSON.parse(data);
    }

    loadSorties() {
        let data = this.datas.getItem("sorties");
        this.users = JSON.parse(data);
    }

    loadCatEntrees() {
        let data = this.datas.getItem("cat-entrees");
        this.users = JSON.parse(data);
    }

    loadCatSortie() {
        let data = this.datas.getItem("cat-sorties");
        this.users = JSON.parse(data);
    }

    saveUsers(){
        let data = JSON.stringify(this.users);
        this.datas.setItem("users",data);
    }

    saveExercices(){
        let data = JSON.stringify(this.exercices);
        this.datas.setItem("exercices",data);
    }

    saveEntrees(){
        let data = JSON.stringify(this.entrees);
        this.datas.setItem("entrees",data);
    }

    saveSorties(){
        let data = JSON.stringify(this.sorties);
        this.datas.setItem("sorties",data);
    }

    saveCatEntrees(){
        let data = JSON.stringify(this.catEntree);
        this.datas.setItem("cat-entrees",data);
    }

    saveCatSorties(){
        let data = JSON.stringify(this.catSortie);
        this.datas.setItem("cat-sorties",data);
    }

    loadAll(){
        this.loadUsers();
        this.loadExercices();
        this.loadEntrees();
        this.loadSorties();
        this.loadCatEntrees();
        this.loadCatSortie();
    }

    saveAll(){
        this.saveUsers();
        this.saveExercices();
        this.saveEntrees();
        this.saveSorties();
        this.saveCatEntrees();
        this.saveCatSorties();
    }

    reload(){
        this.saveAll();
        this.loadAll();
    }
}