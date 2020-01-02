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
