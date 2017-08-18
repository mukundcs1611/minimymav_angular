import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent implements OnInit {
  isLoading=true;
  courses=[];
  constructor(private _router:Router,private _userService:UserService) { 
    console.log(this._router.url);
  }

  ngOnInit() {
    this._userService.getMyCourses().subscribe(x => { this.courses = x },
            error => console.log(error),
             ()=>{
               console.log(this.courses);
            this.isLoading = false;     
            })
  }

}
