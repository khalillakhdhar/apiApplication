import { Injectable } from '@angular/core';
import { Matiere } from '../classes/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
listeMatiere:Matiere[] = [];
  constructor() { }
  getMatiere():Matiere[] {
    return this.listeMatiere;
  }
  addMatiere(mat:Matiere)
  {
    this.listeMatiere.push(mat);
  }
  deleteMatiere(indice:number) {
    this.listeMatiere.splice(indice, 1);
  }
}
