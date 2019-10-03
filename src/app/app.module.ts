import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { QuizService } from "./quiz.service";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultsComponent } from "./results/results.component";
import { ScoresComponent } from "./scores/scores.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LandingpageComponent } from "./landingpage/landingpage.component";

const appRoutes: Routes = [
  { path: "home", component: LandingpageComponent },
  { path: "quiz", component: QuizComponent },
  { path: "results", component: ResultsComponent },
  { path: "scores", component: ScoresComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    ScoresComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled" }),
    HttpClientModule,
    FormsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule {}
