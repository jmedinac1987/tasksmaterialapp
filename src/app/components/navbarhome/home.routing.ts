import { Routes }  from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';

export const homeRoutes: Routes = [
    { path:'', component: SigninComponent},
    { path:'signin', component: SigninComponent },  
    { path:'signup', component: SignupComponent },    
    { path:'request-password-reset', component: RequestResetComponent },
    { path:'response-password-reset', component: ResponseResetComponent },
    { path:'**', component: NotFoundComponent},  
  ];