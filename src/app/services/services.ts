import { Users, Exercices, Entree, Sortie, CategorieEntree, CategorieSortie } from './instances.services';

export class AuthService {
    users: Users[] = [];
    id = null;
    constructor() {}

    save(user: Users) {
      this.users.push(user);
    }

    edit(user: Users, id: string) {
      this.users[id] = user;
    }

    delete(id: string) {
      this.users[id] = null;
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

    constructor(){}

    save(cat: CategorieEntree){
      this.catEntrees.push(cat);
    }

    edit(id: string, cat: CategorieEntree){
      this.catEntrees[id] = cat;
    }

    delete(id: string){
      this.catEntrees[id] = null;
    }
  }


export class CatSortieService {
    catSorties: CategorieSortie[] = [];

    constructor() {}

    save(cat: CategorieSortie) {
      this.catSorties.push(cat);
    }

    edit(id: string, cat: CategorieSortie) {
      this.catSorties[id] = cat;
    }

    delete(id: string) {
      this.catSorties[id] = null;
    }
  }

export class EntreeService
{
  entrees: Entree[] = [];
  constructor(){}

  save(entree: Entree){
    this.entrees.push(entree);
  }

  edit(id: string, entree: Entree){
    this.entrees[id] = entree;
  }

  delete(id: string){
    this.entrees[id] = null;
  }
}

export class  ExerciceService
{
  exercices: Exercices[] = [];
  constructor(){}

  save(exercice: Exercices){
    this.exercices.push(exercice);
  }

  edit(id: string, exercice: Exercices){
    this.exercices[id] = exercice;
  }

  delete(id: string){
    this.exercices[id] = null;
  }
}

export class SortieService{
    sorties = [];

    constructor(){}

    save(sortie: Sortie){
      this.sorties.push(sortie);
    }

    edit(id: string, sortie: Sortie){
      this.sorties[id] = sortie;
    }

    delete(id: string){
      this.sorties[id] = null;
    }
}



