import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass'],
})
export class QuizComponent implements OnInit {
  public profiles: Profile[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Profile[]>('https://namegame.willowtreeapps.com/api/v1.0/profiles')
      .subscribe((result) => {
        this.profiles = result;
      });
  }
}
