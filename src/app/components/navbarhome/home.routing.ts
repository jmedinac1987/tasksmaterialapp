import { Routes }  from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { BeforeLoginService } from '../../services/before-login.service';

export const homeRoutes: Routes = [
    { path:'', component: SigninComponent, canActivate: [BeforeLoginService]},
    { path:'signin', component: SigninComponent, canActivate: [BeforeLoginService] },  
    { path:'signup', component: SignupComponent, canActivate: [BeforeLoginService] },    
    { path:'request-password-reset', component: RequestResetComponent, canActivate: [BeforeLoginService] },
    { path:'response-password-reset', component: ResponseResetComponent, canActivate: [BeforeLoginService] },
    { path:'**', component: NotFoundComponent},  
  ];