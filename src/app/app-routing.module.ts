import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { NavbarprofileComponent } from './components/navbarprofile/navbarprofile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { homeRoutes } from './components/navbarhome/home.routing';
import { profileRoutes } from './components/navbarprofile/profile.routing';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full' },
  { path:'home', component: NavbarhomeComponent, children: homeRoutes },  
  { path:'profile', component: NavbarprofileComponent, children: profileRoutes },  
  { path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
