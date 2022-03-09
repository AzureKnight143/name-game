import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service.';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  public profiles: Profile[];
  public randomProfiles: Profile[];
  public answerProfile: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((result) => {
      this.profiles = result;
      this.randomProfiles = this.profileService.getSixRandomProfiles(
        this.profiles
      );
      this.answerProfile = this.profileService.getRandomName(
        this.randomProfiles
      );
    });
  }
}
