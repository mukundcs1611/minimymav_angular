import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response } from "@angular/http";
import {Course} from '../entities/course';


@Injectable()
export class ViewEnrollCourseService{

private _baseUrl="http://localhost:9999/course-service/course";
private _cartUrl="http://localhost:9999/cart-service"


constructor(private http: Http) { }

findFiltered(model){
    var headers=new Headers();
    //subject:String,courseNum:Number,coption:String,courseLevel:String
    headers.append('Content-Type','application/json');
    return this.http.post(this._baseUrl+'/view',JSON.stringify({subject:model.subject,courseNum:model.courseNum,coption:model.coption,courseLevel:model.courseLevel}),{headers:headers})
    .map((response:Response)=>response.json());
    
}
findAll(){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(this._baseUrl+'/donotAccess',{headers:headers}).map((response:Response)=>response.json());
}
enroll(courseId:string){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this._cartUrl+'/addItem',JSON.stringify({userId:localStorage.getItem('currentUser'),courseId:courseId}),{headers:headers})
    .map((response:Response)=>response.json());}
}