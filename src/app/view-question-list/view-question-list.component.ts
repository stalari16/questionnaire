import { Component, OnInit } from '@angular/core';
import{ManageQuestionServiceService} from '../manage-question-service.service'

@Component({
  selector: 'app-view-question-list',
  templateUrl: './view-question-list.component.html',
  styleUrls: ['./view-question-list.component.scss']
})
export class ViewQuestionListComponent implements OnInit {

 
  questionList;
  constructor(private mangeQuestionService: ManageQuestionServiceService)
  {

  }
  ngOnInit() {
    this.mangeQuestionService.getQuestionList().subscribe((data)=>{
      console.log(data);
      this.questionList = data["Question"];
    });
}

}
