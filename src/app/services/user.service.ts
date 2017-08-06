//Credits "http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial"
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';



export class User {
    id:string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

@Injectable()
export class UserService {
    constructor(private http: Http) { }
   // private _baseUrl="http://localhost:8080";
    private _baseUrl="http://ec2-54-237-240-236.compute-1.amazonaws.com"
    getAll() {
        //return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        //return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(this._baseUrl+'/api/users', JSON.stringify({ username: user.username, password: user.password,firstname:user.firstName ,lastname:user.lastName}),{headers:headers})
                     .map((response:Response)=>response.text());
    
        
    }

    update(user: User) {
       // return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        //return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

}