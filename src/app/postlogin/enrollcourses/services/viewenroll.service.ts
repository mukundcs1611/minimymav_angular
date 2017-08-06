import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response } from "@angular/http";
import {Course} from '../entities/course';


@Injectable()
export class ViewEnrollCourseService{

private _baseUrl="http://localhost:8082";
headers=new Headers();

constructor(private http: Http) { }
findFiltered(model){
    //subject:String,courseNum:Number,coption:String,courseLevel:String
    this.headers.append('Content-Type','sss/json');
    return this.http.post(this._baseUrl+'/course/view',JSON.stringify({subject:model.subject,courseNum:model.courseNum,coption:model.coption,courseLevel:model.courseLevel}),{headers:this.headers})
    .map((response:Response)=>response.json());
    
}
findAll(){
    this.headers.append('Content-Type','application/json');
    return this.http.get(this._baseUrl+'/course/donotAccess',{headers:this.headers}).map((response:Response)=>response.json());
}
enroll(uuid:Text){
    return null;
}
}