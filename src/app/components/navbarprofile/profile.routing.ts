import { Routes }  from '@angular/router';
import { PendingtasksComponent } from './pendingtasks/pendingtasks.component';
import { ConsolidatedtasksComponent } from './consolidatedtasks/consolidatedtasks.component';
import { AboutapplicationComponent } from './aboutapplication/aboutapplication.component';
import { NotFoundComponent } from '../not-found/not-found.component';


export const profileRoutes: Routes = [
    { path:'', component: PendingtasksComponent},
    { path:'pending-tasks', component: PendingtasksComponent },  
    { path:'consolidated-tasks', component: ConsolidatedtasksComponent },    
    { path:'about-application', component: AboutapplicationComponent },    
    { path:'**', component: NotFoundComponent},  
  ];