import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ViewEnrollCourseService} from './services/viewenroll.service';
@Component({
  selector: 'app-viewcourses',
  templateUrl: './enrollcourses.component.html',
  styleUrls: ['./enrollcourses.component.css'],

})
export class EnrollcoursesComponent implements OnInit {

  model: any = {};
  isLoading=true;
  courses=[];
  
  subjects=[//TODO: This has to be retrieved from backend too. Not a priority 
    {
    id:"CSE",
    name:"Computer Science"
    }
    
  ]
  constructor(private _router:Router,private _service:ViewEnrollCourseService) { 
    console.log(this._router.url);
  }
  
  ngOnInit() {
    this.getCourses(true);
  }
  getCourses(firstLoad:boolean){
     if(firstLoad){
       
       this._service.findAll()
       .subscribe(x => { this.courses = x },
            error => console.log(error),
             ()=>{
            this.isLoading = false;     
            }
       )

     }
    else{
      this.isLoading=true;
       this._service.findFiltered(this.model)
       .subscribe(x => { this.courses = x },
            error => console.log(error),
             ()=>{
            this.isLoading = false;     
            }
       )
    } 
  }
}
