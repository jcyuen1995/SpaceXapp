import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { SingleRocketComponent } from './components/single-rocket/single-rocket.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'rockets',
    component: RocketsComponent,
  },
  {
    path: 'rockets/:rocketID',
    component: SingleRocketComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
