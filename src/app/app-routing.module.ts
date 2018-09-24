import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path:'', redirectTo: '/signin', pathMatch:'full' },
  { path:'signin', component: SigninComponent },
  { path:'signup', component: SignupComponent },
  { path:'request-reset', component: RequestResetComponent },
  { path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
