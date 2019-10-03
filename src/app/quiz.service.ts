import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NgForm, FormsModule } from "@angular/forms";
import { ResultsComponent } from "./results/results.component";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  username: string;
  userScore: number = 0;
  userResult: any;
  scoreBoard: any;
  userAndCorrectAnswers: any;

  constructor(private http: HttpClient, private router: Router) {}

  getQuestions(): Observable<any> {
    let response = this.http.get("http://localhost:7000/questions");
    return response;
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:7000/scores");
  }

  postScore(userResult: object, form: object, questions: any) {
    this.http
      .post("http://localhost:7000/scores", userResult)
      .subscribe(response => {
        this.scoreBoard = response;

        this.userAndCorrectAnswers = {
          choice: form,
          question: questions
        };

        this.goToResults();
      });
  }

  results() {
    return this.userAndCorrectAnswers;
  }

  userScoreToResultsPage() {
    return this.userResult;
  }

  goToResults() {
    this.router.navigateByUrl("/results");
    this.userScore = 0;
  }

  goToQuiz() {
    this.router.navigateByUrl("/quiz");
    this.userScore = 0;
  }

  checkAnswer(form: object, questions: any, username: string) {
    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.userScore++;
      }
    }
    this.userResult = {
      username: username,
      score: this.userScore
    };
    return this.userResult;
  }
}
