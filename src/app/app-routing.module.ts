import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AddQuestionComponent } from '../app/add-question/add-question.component'
import { ViewQuestionListComponent } from './view-question-list/view-question-list.component';

const routes: Routes = [
  { path: 'addQuestion', component: AddQuestionComponent },
  { path: 'viewQuestionList', component: ViewQuestionListComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
