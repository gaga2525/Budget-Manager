import { Users, Exercices, Entree, Sortie, CategorieEntree, CategorieSortie } from './instances.services';

abstract class Service {
    protected constructor() {
        this.loadDatas();
    }

    abstract loadDatas();

    abstract saveDatas();

    abstract save(param);

    abstract edit(param1, id: number);

    abstract delete(index: number);

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

    edit(user: Users, id: number) {
      this.users[id] = user;
        this.saveDatas();
    }

    delete(id: number) {
      this.users.splice(id,1);
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
    catEntrees: CategorieEntree[] ;

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

    edit(cat: CategorieEntree, id: number) {
      this.catEntrees[id] = cat;
        this.saveDatas();
    }

    delete(id: number) {
      this.catEntrees.splice(id,1);
        this.saveDatas();
    }

    getCategorieById(index: number): CategorieEntree{
        return this.catEntrees[index];
    }
  }


export class CatSortieService extends Service {
    catSorties: CategorieSortie[] ;

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

    edit(cat: CategorieSortie, id: number) {
      this.catSorties[id] = cat;
        this.saveDatas();
    }

    delete(id: number) {
      this.catSorties.splice(id,1);
        this.saveDatas();
    }

    getCategorieById(index: number): CategorieSortie{
        return this.catSorties[index];
    }
  }

export class EntreeService extends Service {
  entrees: Entree[] ;

    constructor() {
        super();
    }

    loadDatas() {
        const strDatas = localStorage.getItem('entrees');
        const datas = JSON.parse(strDatas);
        this.entrees = datas || [];
    }

    saveDatas() {
        const strDatas = JSON.stringify(this.entrees);
        localStorage.setItem('entrees', strDatas);
    }

    save(entree: Entree) {
    this.entrees.push(entree);
        this.saveDatas();
  }

    edit(entree: Entree, id: number) {
    this.entrees[id] = entree;
        this.saveDatas();
  }

    delete(id: number) {
        this.entrees.splice(id,1);
        this.saveDatas();
  }
}

export class ExerciceService extends Service {
  exercices: Exercices[] ;

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
    this.saveDatas();
  }

    edit(exercice: Exercices, id: number) {
    this.exercices[id] = exercice;
    this.saveDatas();
  }

    delete(id: number) {
    this.exercices.splice(id, 1);
    this.saveDatas();
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
      this.saveDatas();
    }

    edit(sortie: Sortie, id: number) {
      this.sorties[id] = sortie;
      this.saveDatas();
    }

    delete(id: number) {
      this.sorties.splice(id,1);
      this.saveDatas();
    }
}



