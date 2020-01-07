import { Users, Exercices, Entree, Sortie, CategorieEntree, CategorieSortie } from './instances.services';
import {LoaderService} from "./loader.services";

export class AuthService {
    users: Users[] = [];
    id = null;

    constructor(private service: LoaderService) {
        this.users = this.service.users;
    }

    save(user: Users) {
      this.users.push(user);
        this.service.users = this.users;
        this.service.saveUsers();
    }

    edit(user: Users, id: string) {
      this.users[id] = user;
        this.service.users = this.users;
        this.service.saveUsers();
    }

    delete(id: string) {
      this.users[id] = null;
        this.service.users = this.users;
        this.service.saveUsers();
    }

    connect(login: string, psw: string): boolean{
        const longeur = this.users.length;
        for (let i = 0; i < longeur; i++) {
          if(this.users[i].login === login && this.users[i].psw === psw){
            this.id = i;
            return true;
          }
        }
        return false;
    }

    deconnect(){
        this.id = null;
    }

  }

export class CatEntreeService{
    catEntrees: CategorieEntree[] = [];

    constructor(private service: LoaderService) {
        this.catEntrees = this.service.catEntree;
    }

    save(cat: CategorieEntree){
      this.catEntrees.push(cat);
        this.service.catEntree = this.catEntrees;
        this.service.saveCatEntrees();
    }

    edit(id: string, cat: CategorieEntree){
      this.catEntrees[id] = cat;
        this.service.catEntree = this.catEntrees;
        this.service.saveCatEntrees();
    }

    delete(id: string){
      this.catEntrees[id] = null;
        this.service.catEntree = this.catEntrees;
        this.service.saveCatEntrees();
    }
  }


export class CatSortieService {
    catSorties: CategorieSortie[] = [];

    constructor(private service: LoaderService) {
        this.catSorties = this.service.catSortie;
    }

    save(cat: CategorieSortie) {
      this.catSorties.push(cat);
        this.service.catSortie = this.catSorties;
        this.service.saveCatSorties();
    }

    edit(id: string, cat: CategorieSortie) {
      this.catSorties[id] = cat;
        this.service.catSortie = this.catSorties;
        this.service.saveCatSorties();
    }

    delete(id: string) {
      this.catSorties[id] = null;
        this.service.catSortie = this.catSorties;
        this.service.saveCatSorties();
    }
  }

export class EntreeService
{
  entrees: Entree[] = [];

    constructor(private service: LoaderService) {
        this.entrees = this.service.entrees;
    }

  save(entree: Entree){
    this.entrees.push(entree);
      this.service.entrees = this.entrees;
      this.service.saveEntrees();
  }

  edit(id: string, entree: Entree){
    this.entrees[id] = entree;
      this.service.entrees = this.entrees;
      this.service.saveEntrees();
  }

  delete(id: string){
    this.entrees[id] = null;
      this.service.entrees = this.entrees;
      this.service.saveEntrees();
  }
}

export class  ExerciceService
{
  exercices: Exercices[] = [];

    constructor(private service: LoaderService) {
        this.exercices = this.service.exercices;
    }

  save(exercice: Exercices){
    this.exercices.push(exercice);
      this.service.exercices.push(exercice);
      this.service.saveExercices();
  }

  edit(id: string, exercice: Exercices){
    this.exercices[id] = exercice;
      this.service.exercices = this.exercices;
      this.service.saveExercices();
  }

  delete(id: string){
    this.exercices[id] = null;
      this.service.exercices = this.exercices;
      this.service.saveExercices();
  }
}

export class SortieService{
    sorties = [];

    constructor(private service: LoaderService) {
        this.sorties = this.service.sorties;
    }

    save(sortie: Sortie){
      this.sorties.push(sortie);
        this.service.sorties = this.sorties;
        this.service.saveSorties();
    }

    edit(id: string, sortie: Sortie){
      this.sorties[id] = sortie;
        this.service.sorties = this.sorties;
        this.service.saveSorties();
    }

    delete(id: string){
      this.sorties[id] = null;
        this.service.sorties = this.sorties;
        this.service.saveSorties();
    }
}



