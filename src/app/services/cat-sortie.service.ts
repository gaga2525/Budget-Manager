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
