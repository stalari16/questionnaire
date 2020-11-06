import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { ManageQuestionServiceService } from '../manage-question-service.service'
import { QuestionModel } from '../questionModel'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  question:any;
  names:any;
  questionModel : QuestionModel;
  checkoutForm = new FormGroup ({
    QID: new FormControl(),
    QuestionText: new FormControl(),
    QuestionHelp: new FormControl(),
    IsMultyAnsware: new FormControl(),
    // Selection: new FormControl(),
    // Selection: new FormArray([
    //   new FormGroup({
    //     OptionID: new FormControl(),
    //     OptionText: new FormControl(),
    //     IsSelected: new FormControl(),
    //   })])
  });

  constructor(private mangeQuestionService: ManageQuestionServiceService,private fb: FormBuilder)
  {
    this.checkoutForm = this.fb.group({
      QID: 0,
      QuestionText: '',
      QuestionHelp: '',
      IsMultyAnsware: '',
      // selection: '',
      Selection:this.addOptions()
      //this.fb.array([this.addOptions]),
    });
    console.log(this.checkoutForm);
  }

  addOptions(): FormArray {  return this.fb.array([this.optionData]);}
 get optionData(): FormGroup {
    return this.fb.group({
      OptionID: 10,
      OptionText: "hel1o",
      IsSelected:true
    });
  }
  addAnsControl()
  {
    //this.checkoutForm.get('options').value
  }
  
  ngOnInit(): void {
    this.mangeQuestionService.getQuestionByID(1).subscribe((data)=>{
    console.log(data);
    // this.checkoutForm = data as FormGroup;
    });
  }
  questionList;
  
   ConvertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
  }
  addQuestion(customerData) {
    
    this.questionModel = new QuestionModel;
    this.questionModel.QID = this.ConvertStringToNumber(this.checkoutForm.value.QID);
    this.questionModel.QuestionText = this.checkoutForm.value.QuestionText;
    this.questionModel.QuestionHelp = this.checkoutForm.value.QuestionHelp;
    this.questionModel.IsMultyAnsware = this.checkoutForm.value.IsMultyAnsware;
    this.questionModel.Selection = this.checkoutForm.value.Selection;
    this.mangeQuestionService.addQuestion(this.questionModel).subscribe((data)=>{
      console.log(data);
      this.questionList = data["Question"];
    });
  }
}