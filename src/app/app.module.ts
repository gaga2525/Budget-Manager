import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormAuthComponent} from './form-auth/form-auth.component';
import {FormInscComponent} from './form-insc/form-insc.component';
import {HeaderComponent} from './header/header.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NewExerciceComponent} from './new-exercice/new-exercice.component';
import {SaveEntreeComponent} from './save-entree/save-entree.component';
import {SaveSortieComponent} from './save-sortie/save-sortie.component';
import {SaveCatEntreeComponent} from './save-cat-entree/save-cat-entree.component';
import {SaveCatSortieComponent} from './save-cat-sortie/save-cat-sortie.component';
import {EntreesComponent} from './entrees/entrees.component';
import {SortiesComponent} from './sorties/sorties.component';
import {ExerciceComponent} from './exercice/exercice.component';
import {CatEntreeComponent} from './cat-entree/cat-entree.component';
import {CatSortieComponent} from './cat-sortie/cat-sortie.component';
import {HomeComponent} from './home/home.component';
import {
    AuthService,
    CatEntreeService,
    CatSortieService,
    EntreeService,
    ExerciceService,
    SortieService
} from './services/services';
import {AuthGuard} from './services/auth-guard-service';
import {EditExerciceComponent} from './edit-exercice/edit-exercice.component';
import {EditEntreeComponent} from './edit-entree/edit-entree.component';
import {EditSortieComponent} from './edit-sortie/edit-sortie.component';


const appRoutes: Routes = [
  { path : '', canActivate: [AuthGuard], component : HomeComponent },
  { path : 'connexion', component : FormAuthComponent },
  { path : 'inscription', component : FormInscComponent },
  { path : 'exercices', canActivate: [AuthGuard], component : ExerciceComponent },
  { path : 'entrees', canActivate: [AuthGuard], component : EntreesComponent },
  { path : 'sorties', canActivate: [AuthGuard], component : SortiesComponent },
  { path : 'exercices/new-exo', canActivate: [AuthGuard], component : NewExerciceComponent },
  { path : 'entrees/new-entree', canActivate: [AuthGuard], component : SaveEntreeComponent },
  { path : 'sorties/new-sortie', canActivate: [AuthGuard], component : SaveSortieComponent },
  { path : 'new-cat-entree', canActivate: [AuthGuard], component : SaveCatEntreeComponent },
  { path : 'new-cat-sortie', canActivate: [AuthGuard], component : SaveCatSortieComponent },
    { path: 'exercices/edit-exercice/:id', canActivate: [AuthGuard], component: EditExerciceComponent },
  { path: 'entrees/edit/:id', canActivate: [AuthGuard], component: EditEntreeComponent},
  { path: 'sorties/edit/:id', canActivate: [AuthGuard], component: EditSortieComponent}
];

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
    HomeComponent,
    EditExerciceComponent,
    EditEntreeComponent,
    EditSortieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule
  ],
[
    AuthService, EntreeService, SortieService, CatEntreeService, CatSortieService, ExerciceService, AuthGuard,
    Entree, Sortie, Exercices, Users, CategorieEntree, CategorieSortie,
  ],
    bootstrap;
:
[AppComponent];
})
export class AppModule { }
