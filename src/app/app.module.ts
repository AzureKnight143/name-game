import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProfileService } from './services/profile.service.';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    QuizResultsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
