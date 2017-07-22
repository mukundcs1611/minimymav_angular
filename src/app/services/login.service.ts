import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    private _baseUrl="http://localhost:5000"
    login(username: string, password: string) {
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(this._baseUrl+'/api/authenticate', JSON.stringify({ username: username, password: password }),{headers:headers})
        .map((response:Response)=>{let r=response.text(); 
                                    if(r=='Success'){
                                        localStorage.setItem('currentUser', JSON.stringify(username));
                                    }
                                    return username;
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