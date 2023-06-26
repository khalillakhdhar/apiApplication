import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RappelsComponent } from './rappels/rappels.component';
import { RappelDetailsComponent } from './rappel-details/rappel-details.component';
import { FormsModule } from '@angular/forms';
import { MatiereComponent } from './matiere/matiere.component';

@NgModule({
  declarations: [
    AppComponent,
    RappelsComponent,
    RappelDetailsComponent,
    MatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
