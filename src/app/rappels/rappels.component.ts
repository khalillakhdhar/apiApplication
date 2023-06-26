import { Component } from '@angular/core';
import { RappelsService } from '../core/services/rappels.service';
import { Rappel } from '../core/classes/rappel';

@Component({
  selector: 'app-rappels',
  templateUrl: './rappels.component.html',
  styleUrls: ['./rappels.component.css']
})
export class RappelsComponent {
  rappel=new Rappel();
  rappelList:Rappel[]=[];
  constructor(private rappelsService:RappelsService)
  {
    // injection de service
this.getRappels();

  }
  getRappels()
  {
this.rappelList=this.rappelsService.getRappels();
  }
  addOne()
  {
    this.rappelsService.addRappel(this.rappel);
    this.getRappels();
  }


}
