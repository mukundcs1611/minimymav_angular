import { Component, OnInit } from '@angular/core';

import{Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-postlogin',
  template: `
              <navbar></navbar>
              <h2>welcome</h2>
              <div class="container">
                 <router-outlet ></router-outlet>  
              </div>`,
  styleUrls: ['./postlogin.component.css']
})
export class PostloginComponent implements OnInit {

  constructor(private _router:Router,private _r:ActivatedRoute){
    console.log(this._router.url);
  }
  

  ngOnInit() {
  }

}
