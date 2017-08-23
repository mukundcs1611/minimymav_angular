import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';

@Injectable()
export class CartService{

    private _baseUrl="http://localhost:9999/cart-service";

    constructor(private http:Http){


    }
    public getCart(){
        let userId=localStorage.getItem('currentUser');
        var headers=new Headers();
        headers.append('Content-Type','application/json');
        return this.http.get(this._baseUrl+'/mycart/'+userId)
        .map((response:Response)=>response.json());
        
}
}