import { Routes }  from '@angular/router';
import { PendingtasksComponent } from './pendingtasks/pendingtasks.component';
import { ConsolidatedtasksComponent } from './consolidatedtasks/consolidatedtasks.component';
import { AboutapplicationComponent } from './aboutapplication/aboutapplication.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AfterLoginService } from '../../services/after-login.service';


export const profileRoutes: Routes = [
    { path:'', component: PendingtasksComponent, canActivate: [AfterLoginService]},
    { path:'pending-tasks', component: PendingtasksComponent, canActivate: [AfterLoginService] },  
    { path:'consolidated-tasks', component: ConsolidatedtasksComponent, canActivate: [AfterLoginService] },    
    { path:'about-application', component: AboutapplicationComponent, canActivate: [AfterLoginService] },    
    { path:'**', component: NotFoundComponent},  
  ];