import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { FormInscComponent } from './form-insc/form-insc.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewExerciceComponent } from './new-exercice/new-exercice.component';
import { SaveEntreeComponent } from './save-entree/save-entree.component';
import { SaveSortieComponent } from './save-sortie/save-sortie.component';
import { SaveCatEntreeComponent } from './save-cat-entree/save-cat-entree.component';
import { SaveCatSortieComponent } from './save-cat-sortie/save-cat-sortie.component';
import { EntreesComponent } from './entrees/entrees.component';
import { SortiesComponent } from './sorties/sorties.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { CatEntreeComponent } from './cat-entree/cat-entree.component';
import { CatSortieComponent } from './cat-sortie/cat-sortie.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'connexion', component : FormAuthComponent },
  { path : 'inscription', component : FormInscComponent },
  { path : 'exercices', component : ExerciceComponent },
  { path : 'entrees', component : EntreesComponent },
  { path : 'sorties', component : SortiesComponent },
  { path : 'new-exo', component : NewExerciceComponent },
  { path : 'new-entree', component : SaveEntreeComponent },
  { path : 'new-sortie', component : SaveSortieComponent },
  { path : 'new-cat-entree', component : SaveCatEntreeComponent },
  { path : 'new-cat-sortie', component : SaveCatSortieComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormAuthComponent,
    FormInscComponent,
    HeaderComponent,
    NavBarComponent,
    NewExerciceComponent,
    SaveEntreeComponent,
    SaveSortieComponent,
    SaveCatEntreeComponent,
    SaveCatSortieComponent,
    EntreesComponent,
    SortiesComponent,
    ExerciceComponent,
    CatEntreeComponent,
    CatSortieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
