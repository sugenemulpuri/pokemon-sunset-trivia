import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  scoreBoard: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.getScores();
  }

  getScores() {
    this.quizService.getScores().subscribe(response => {
      this.scoreBoard = response;
    });
  }
}
