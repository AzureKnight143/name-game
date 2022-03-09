import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfiles() {
    return this.http.get<Profile[]>(
      'https://namegame.willowtreeapps.com/api/v1.0/profiles'
    );
  }

  getSixRandomProfiles(profiles: Profile[]) {
    var sixProfiles: Profile[] = [];
    for (var x = 0; x < 6; x++) {
      var randomProfile =
        profiles[Math.floor(Math.random() * (profiles.length - 1))];
      if (!sixProfiles.includes(randomProfile)) sixProfiles.push(randomProfile);
    }
    return sixProfiles;
  }

  getRandomName(randomProfiles: Profile[]) {
    return randomProfiles[
      Math.floor(Math.random() * (randomProfiles.length - 1))
    ];
  }
}
