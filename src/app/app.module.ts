import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ViewQuestionListComponent } from './view-question-list/view-question-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewQuestionComponent } from './view-question/view-question.component';
@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    ViewQuestionComponent,
    ViewQuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
