import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RappelsComponent } from './rappels/rappels.component';
import { RappelDetailsComponent } from './rappel-details/rappel-details.component';

const routes: Routes = [
{
  path: '',redirectTo:"rappel"
},
{
  path:'rappel',component:RappelsComponent
},
{
  path:'rappel/:indice',component:RappelDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
