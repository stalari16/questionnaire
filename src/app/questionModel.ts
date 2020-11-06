export class QuestionModel {
    QID: number;
    QuestionText: string;
    QuestionHelp: string;
    IsMultyAnsware: boolean;
    Selection:  AnswarQuestion[];
}

export class AnswarQuestion {
     OptionID :number;
     OptionText : string;
     IsSelected :boolean;
}




// <app-view-question-list></app-view-question-list> 

// <app-add-question></app-add-question>  