import { Component } from '@angular/core';
import { MatiereService } from '../core/services/matiere.service';
import { Matiere } from '../core/classes/matiere';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent {
matiere=new Matiere();
matiereList:Matiere[]=[];
constructor(private matiereapi:MatiereService)
{

}
getMatiere()
{
this.matiereList=this.matiereapi.getMatiere();
}
addMatiere()
{
  this.matiereapi.addMatiere(this.matiere);
}
}
