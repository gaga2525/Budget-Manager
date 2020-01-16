import { Users, Exercices, Entree, Sortie, CategorieEntree, CategorieSortie } from './instances.services';
import {OnDestroy, OnInit} from '@angular/core';

abstract class Service {
    protected constructor() {
        this.loadDatas();
    }

    abstract loadDatas();

    abstract saveDatas();

}

export class AuthService extends Service {
    users: Users[];
    id = null;

    constructor() {
        super();
    }

    loadDatas() {
        const strDatas = localStorage.getItem('users');
        this.users = JSON.parse(strDatas);
        console.log(localStorage.getItem('users'));
    }

    saveDatas(): void {
        const strDatas = JSON.stringify(this.users);
        localStorage.setItem('users', strDatas);
    }

    save(user: Users) {
      this.users.push(user);
        this.saveDatas();
    }

    edit(user: Users, id: string) {
      this.users[id] = user;
        this.saveDatas();
    }

    delete(id: string) {
      this.users[id] = null;
        this.saveDatas();
    }

    connect(login: string, psw: string): boolean {
        const longeur = this.users.length;
        for (let i = 0; i < longeur; i++) {
            if (this.users[i].login === login && this.users[i].psw === psw) {
            this.id = i;
            return true;
          }
        }
        return false;
    }

    deconnect() {
        this.id = null;
    }

  }

export class CatEntreeService extends Service {
    catEntrees: CategorieEntree[] = [];

    constructor() {
        super();
    }

    loadDatas() {
        const strDatas = localStorage.getItem('cat-entrees');
        this.catEntrees = JSON.parse(strDatas);
    }

    saveDatas() {
        const strDatas = JSON.stringify(this.catEntrees);
        localStorage.setItem('cat-entrees', strDatas);
    }

    save(cat: CategorieEntree) {
      this.catEntrees.push(cat);
        this.saveDatas();
    }

    edit(id: string, cat: CategorieEntree) {
      this.catEntrees[id] = cat;
        this.saveDatas();
    }

    delete(id: string) {
      this.catEntrees[id] = null;
        this.saveDatas();
    }
  }


export class CatSortieService extends Service {
    catSorties: CategorieSortie[] = [];

    constructor() {
        super();
    }

    loadDatas() {
        const strDatas = localStorage.getItem('cat-sorties');
        this.catSorties = JSON.parse(strDatas);
    }

    saveDatas() {
        const strDatas = JSON.stringify(this.catSorties);
        localStorage.setItem('cat-sorties', strDatas);
    }

    save(cat: CategorieSortie) {
      this.catSorties.push(cat);
        this.saveDatas();
    }

    edit(id: string, cat: CategorieSortie) {
      this.catSorties[id] = cat;
        this.saveDatas();
    }

    delete(id: string) {
      this.catSorties[id] = null;
        this.saveDatas();
    }
  }

export class EntreeService extends Service {
  entrees: Entree[] = [];

    constructor() {
        super();
    }

    loadDatas() {
        const strDatas = localStorage.getItem('entrees');
        this.entrees = JSON.parse(strDatas);
    }

    saveDatas() {
        const strDatas = JSON.stringify(this.entrees);
        localStorage.setItem('entrees', strDatas);
    }

    save(entree: Entree) {
    this.entrees.push(entree);
        this.saveDatas();
  }

    edit(id: string, entree: Entree) {
    this.entrees[id] = entree;
        this.saveDatas();
  }

    delete(id: string) {
    this.entrees[id] = null;
        this.saveDatas();
  }
}

export class ExerciceService extends Service {
  exercices: Exercices[] = [];

    constructor() {
        super();
    }

    loadDatas() {
        const strDatas = localStorage.getItem('exercices');
        this.exercices = JSON.parse(strDatas);
    }

    saveDatas() {
        const strDatas = JSON.stringify(this.exercices);
        localStorage.setItem('exercices', strDatas);
    }


    save(exercice: Exercices) {
    this.exercices.push(exercice);
  }

    edit(id: string, exercice: Exercices) {
    this.exercices[id] = exercice;
  }

    delete(id: string) {
    this.exercices[id] = null;
  }
}

export class SortieService extends Service {
    sorties = [];

    constructor() {
        super();
    }


    loadDatas() {
        const strDatas = localStorage.getItem('sorties');
        this.sorties = JSON.parse(strDatas);
    }

    saveDatas() {
        const strDatas = JSON.stringify(this.sorties);
        localStorage.setItem('sorties', strDatas);
    }


    save(sortie: Sortie) {
      this.sorties.push(sortie);
    }

    edit(id: string, sortie: Sortie) {
      this.sorties[id] = sortie;
    }

    delete(id: string) {
      this.sorties[id] = null;
    }
}



