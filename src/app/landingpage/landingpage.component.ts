import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { QuizService } from "../quiz.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-landingpage",
  templateUrl: "./landingpage.component.html",
  styleUrls: ["./landingpage.component.css"]
})
export class LandingpageComponent implements OnInit {
  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {}

  goToQuiz() {
    this.router.navigateByUrl("/quiz");
  }
}
