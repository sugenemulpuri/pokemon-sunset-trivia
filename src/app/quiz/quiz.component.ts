import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questionList: any[];
  userResult: any;
  userScore: number;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.quizService.getQuestions().subscribe(response => {
      this.questionList = response;
    });
  }

  onSubmit(form: NgForm) {
    this.userResult = this.quizService.checkAnswer(
      form.value,
      this.questionList,
      form.value.username
    );
    this.quizService.postScore(this.userResult, form.value, this.questionList);
  }
}
