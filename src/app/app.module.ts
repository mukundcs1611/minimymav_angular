import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {HttpModule,Http} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {AlertService} from './services/alert.service';
import {AuthGuard} from './_guards/auth.guard';
import { AlertComponent } from './alert/alert.component';
//Postlogin
import {PostloginModule} from './postlogin/postlogin.module';
import {ViewcoursesComponent} from './postlogin/viewcourses/viewcourses.component';
import {EnrollcoursesComponent} from './postlogin/enrollcourses/enrollcourses.component';
import {NavigateComponent} from './postlogin/navigate/navigate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    
    RouterModule.forRoot( 
         [{ path: '', component:LoginComponent },
         {path:'login',component:LoginComponent},
         {path: 'postlogin',loadChildren: './postlogin/postlogin.module#PostloginModule',canActivate: [AuthGuard] }, 
         { path: 'register', component: RegisterComponent },
            // otherwise redirect to home
         { path: '**', redirectTo: '' }]),
    HttpModule        

  ],
  
  providers: [AlertService,
        LoginService,AuthGuard,UserService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
