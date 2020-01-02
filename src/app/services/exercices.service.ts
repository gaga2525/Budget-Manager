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
