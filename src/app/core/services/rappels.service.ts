import { Injectable } from '@angular/core';
import { Rappel } from '../classes/rappel';

@Injectable({
  providedIn: 'root'
})
export class RappelsService {
rappels:Rappel[]=[];
  constructor() { }
  getRappels():Rappel[] {
  return this.rappels;
  }
addRappel(rappel:Rappel) {
  this.rappels.push(rappel);
}
getRappel(indice:number)
{
  return this.rappels[indice]; // return un objet d'ordre indice

}
deleteRappel(indice:number)
{
  this.rappels.splice(indice, 1);
}
}
