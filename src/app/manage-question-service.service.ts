import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionModel } from './questionModel';
@Injectable({
  providedIn: 'root'
})
export class ManageQuestionServiceService {

  constructor(private httpClient: HttpClient) { }

  public getQuestionList(): Observable<any>{
    return this.httpClient.get(`https://localhost:44320/GetQuestionList`);
  }

  public addQuestion(any:any): Observable<any>{
    return this.httpClient.post(`https://localhost:44320/AddQuestion`,any);
  }
  public getQuestionByID(questionID:number): Observable<any> {
    return this.httpClient.get('https://localhost:44320/GetQuestion/'+questionID);
    }
}
