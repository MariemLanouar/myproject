import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent} from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './accueil/about/about.component';
import { InscriptionEntrepriseComponent } from './inscription-entreprise/inscription-entreprise.component';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
 {path:'connexion',component:ConnexionComponent},
 {path:'creer_compte',component:CreerCompteComponent},
 {path:'inscription_recuiteur',component:InscriptionEntrepriseComponent},
 {path:'inscription_candidat',component:InscriptionCandidatComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
