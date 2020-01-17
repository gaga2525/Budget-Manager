export class Users{
    login: string;
    psw: string;
    email: string;
    nomComplet: string;

    constructor(nomComplet: string, login: string, psw: string, email: string) {
        this.nomComplet = nomComplet;
        this.login = login;
        this.psw = psw;
        this.email = email;
    }
}

export class Exercices{
    dateDebut: string;
    dateFin: string;
    montantBudgetaire: number;
    montantInit: number;
    observation: string;

    constructor(dateDebut: string, dateFin: string, montantBudg: number, montantInit: number){
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.montantBudgetaire = montantBudg;
        this.montantInit = montantInit;
    }
}

export class Entree{
    date: string;
    montant: bigint;
    idCat: bigint;

    constructor(date: string, montant: bigint, categorie: bigint){
        this.date = date;
        this.montant = montant;
        this.idCat = categorie;
    }
}

export class Categorie{
    intitule: string;

    constructor(intitule: string){
        this.intitule = intitule;
    }
}

export class Sortie{
    date: string;
    montant: bigint;
    idCat: bigint;
}

export class CategorieEntree extends Categorie{}

export class CategorieSortie extends Categorie{}
