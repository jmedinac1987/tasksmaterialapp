import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { TaskService } from './services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatDialogModule, MatRadioModule, MatProgressSpinnerModule } from '@angular/material';
import { SigninComponent } from './components/navbarhome/signin/signin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/navbarhome/signup/signup.component';
import { RequestResetComponent } from './components/navbarhome/password/request-reset/request-reset.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarprofileComponent } from './components/navbarprofile/navbarprofile.component';
import { ResponseResetComponent } from './components/navbarhome/password/response-reset/response-reset.component';
import { AboutapplicationComponent } from './components/navbarprofile/aboutapplication/aboutapplication.component';
import { ConsolidatedtasksComponent } from './components/navbarprofile/consolidatedtasks/consolidatedtasks.component';
import { PendingtasksComponent } from './components/navbarprofile/pendingtasks/pendingtasks.component';
import { AddComponent } from './components/navbarprofile/crud/add/add.component';
import { EditComponent } from './components/navbarprofile/crud/edit/edit.component';
import { DeleteComponent } from './components/navbarprofile/crud/delete/delete.component';
import { ShowComponent } from './components/navbarprofile/crud/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NotFoundComponent,
    SignupComponent,
    RequestResetComponent,
    NavbarhomeComponent,
    NavbarprofileComponent,
    ResponseResetComponent,
    AboutapplicationComponent,
    ConsolidatedtasksComponent,
    PendingtasksComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,    
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    SnotifyModule
  ],
  entryComponents:[
    AddComponent,
    EditComponent,
    DeleteComponent,
    ShowComponent
  ],
  providers: [UserService, 
    TokenService, 
    TaskService, 
    AuthService, 
    AfterLoginService, 
    BeforeLoginService, 
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
