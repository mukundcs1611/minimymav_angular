import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import {HttpModule} from '@angular/http';

//import { PostloginRoutingModule } from './postlogin-routing.module';
import {PostloginComponent} from './postlogin.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { EnrollcoursesComponent } from './enrollcourses/enrollcourses.component';
import { NavigateComponent } from './navigate/navigate.component';


@NgModule({
  imports: [
    CommonModule,
    
     FormsModule,
    RouterModule.forChild( [//{path: '',component:PostloginComponent},
            {path: '',component:PostloginComponent,
          children:[
            { path: 'viewcourses', component: ViewcoursesComponent },
            { path: 'enroll', component: EnrollcoursesComponent },
            { path: '**', redirectTo: '' }
          ]}]
        ),
    HttpModule        

  ],
  
  declarations: [ViewcoursesComponent, EnrollcoursesComponent,PostloginComponent,NavigateComponent]
})
export class PostloginModule { }
