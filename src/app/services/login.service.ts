import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    private _baseUrl="http://localhost:9999/user-service/";
    //private _baseUrl="http://ec2-54-237-240-236.compute-1.amazonaws.com"
    login(username: string, password: string) {
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(this._baseUrl+'/user/authenticate', JSON.stringify({ param: username, password: password }),{headers:headers})
        .map((response:Response)=>{let r=response.json(); 
                                    console.log(r);
                                    if(r!=null){
                                        localStorage.setItem('currentUser', r.uuid);
                                    }
                                    //return username;
                                  });
            
    }
    
    logout() {
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        // remove user from local storage to log user out  
        let username=localStorage.getItem('currentUser')
        localStorage.removeItem('currentUser');
        return this.http.post(this._baseUrl+'/api/logout', JSON.stringify({ username: username}));
       
        
        
    }
    register(){

    }
}