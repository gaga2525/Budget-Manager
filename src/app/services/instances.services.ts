export class Users{
    login: string;
    psw: string;
    email: string;
    telephone: string;
    nomComplet: string;

    constructor(nomComplet: string,login: string,psw: string,email: string,phone: string){
        this.nomComplet = nomComplet;
        this.login = login;
        this.psw = psw;
        this.email = email;
        this.telephone = phone;
    }
}

export class Exercices{
    dateDebut: string;
    dateFin: string;
    montantBudgetaire: bigint;
    montantInit : bigint;
    observation : string;

    constructor(dateDebut: string, dateFin: string, montantBudg: bigint, montantInit: bigint){
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