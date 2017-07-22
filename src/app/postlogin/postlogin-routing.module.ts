import { NgModule } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';

import {ViewcoursesComponent} from './viewcourses/viewcourses.component';
import {EnrollcoursesComponent} from './enrollcourses/enrollcourses.component';

const routes: Routes = [ { path: 'viewcourses', component: ViewcoursesComponent,outlet:'postlogin'},
            { path: 'enroll', component: EnrollcoursesComponent },
            // otherwise redirect to home
            { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostloginRoutingModule { 
  
}
