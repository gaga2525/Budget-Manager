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
