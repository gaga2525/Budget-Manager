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
