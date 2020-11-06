import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { QuestionModel } from './questionModel';

const JSON_DATA = {
  "Question": [
    {
      "QID": 1,
      "QuestionText": "What product you like to know today?",
      "QuestionHelp": "need help on choose on policy",
      "IsMultyAnsware": true,
      "Selection": [
        {
          "OptionID": 1,
          "OptionText": "Credit card",
          "IsSelected": true
        },
        {
          "OptionID": 2,
          "OptionText": "Personal Loan",
          "IsSelected": true
        }
      ]
    },
    {
      "QID": 2,
      "QuestionText": "How may we help you?",
      "QuestionHelp": null,
      "IsMultyAnsware": false,
      "Selection": [
        {
          "OptionID": 1,
          "OptionText": "Buy Credit card",
          "IsSelected": true
        }
      ]
    },
    {
      "QID": 3,
      "QuestionText": "Net salary",
      "QuestionHelp": null,
      "IsMultyAnsware": false,
      "Selection": [
        {
          "OptionID": 3,
          "OptionText": "More than 100K",
          "IsSelected": true
        }
      ]
    },
    {
      "QID": 4,
      "QuestionText": "How do you spend income",
      "QuestionHelp": null,
      "IsMultyAnsware": false,
      "Selection": [
        {
          "OptionID": 3,
          "OptionText": "10K per month",
          "IsSelected": true
        }
      ]
    },
    {
      "QID": 10,
      "QuestionText": "What is monthly credit usage",
      "QuestionHelp": null,
      "IsMultyAnsware": true,
      "Selection": [
        {
          "OptionID": 10,
          "OptionText": "5K",
          "IsSelected": true
        },
        {
          "OptionID": 11,
          "OptionText": "15K",
          "IsSelected": true
        }
      ]
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class ManageQuestionServiceService {

  constructor(private httpClient: HttpClient) { }

  public getQuestionList(): Observable<any>{
    // return this.httpClient.get(`https://localhost:44320/GetQuestionList`);

    return new Observable(observer => {
      setTimeout(() => {
        observer.next(JSON_DATA);
        observer.complete();
      }, 2000)
    })
  }

  public addQuestion(any:any): Observable<any>{
    // return this.httpClient.post(`https://localhost:44320/AddQuestion`,any);
    return new Observable(null);
  }
  public getQuestionByID(questionID:number): Observable<any> {
   // return this.httpClient.get('https://localhost:44320/GetQuestion/'+questionID);
   return new Observable(observer => {
    setTimeout(() => {
      observer.next(JSON_DATA.Question[0]);
      observer.complete();
    }, 2000)
  })
  }
}
