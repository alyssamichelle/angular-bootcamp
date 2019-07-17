import { Video } from '../types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map, tap } from 'rxjs/operators';

@Injectable({
  // this service should be created by the root app injector
  providedIn: 'root'
})

export class VideoLoaderService {
  apiUrl = 'http://api.angularbootcamp.com';

  constructor(private http: HttpClient) { }

  loadVideos() {
    return this.http.get<Video[]>(this.apiUrl + '/videos');
      // .pipe(
      //   tap(data => console.log('BEFORE: ', data)),
      //   map(videos => videos.slice(0, 1)),
      //   tap( data => console.log('AFTER: ', data))
      // );

  }
}
