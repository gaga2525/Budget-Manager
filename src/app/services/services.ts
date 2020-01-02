export class AuthService {
    users = [];
    constructor() {}

    save(user) {
      this.users.push(user);
    }

    edit(user,id) {
      this.users[id] = user;
    }

    delete(id) {
      this.users[id] = null;
    }
  }

export class CatEntreeService{
    catEntrees = [];

    constructor(){}

    save(cat){
      this.catEntrees.push(cat);
    }

    edit(id,cat){
      this.catEntrees[id] = cat;
    }

    delete(id){
      this.catEntrees[id] = null;
    }
  }


export class CatSortieService {
    catSorties = [];

    constructor() {}

    save(cat) {
      this.catSorties.push(cat);
    }

    edit(id,cat) {
      this.catSorties[id] = cat;
    }

    delete(id) {
      this.catSorties[id] = null;
    }
  }

export class EntreeService
{
  entrees = [];
  constructor(){}

  save(entree){
    this.entrees.push(entree);
  }

  edit(id,entree){
    this.entrees[id] = entree;
  }

  delete(id){
    this.entrees[id] = null;
  }
}

export class  ExerciceService
{
  exercices = [];
  constructor(){}

  save(exercice){
    this.exercices.push(exercice);
  }

  edit(id,exercice){
    this.exercices[id] = exercice;
  }

  delete(id){
    this.exercices[id] = null;
  }
}

export class SortieService{
    sorties = [];

    constructor(){}

    save(sortie){
      this.sorties.push(sortie);
    }

    edit(id,sortie){
      this.sorties[id] = sortie;
    }

    delete(id){
      this.sorties[id] = null;
    }
}



