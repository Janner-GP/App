import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTES
import { MomentsComponent } from './components/moments/moments.component';
import { HomeComponent } from './components/home/home.component';
import { MomentComponent } from './components/moment/moment.component';


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'moments', component: MomentsComponent },
  { path:'moments/moment/:id', component: MomentComponent },
  { path:'**', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
