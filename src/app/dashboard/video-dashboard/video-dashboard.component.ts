import { VideoLoaderService } from './../../video-loader.service';
import { Component } from '@angular/core';

import { Video } from '../../../types';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent {
  videoData: Observable<Video[]>;
  video;
  firstVideo;

  setVideo(video: Video, firstVideo: Video) {
    // if (video) {
    //   this.video = video;
    // } else {
    //   this.video = firstVideo;
    // }
    this.video = video;
    console.log('hello from the dashboard');
  }

  constructor(service: VideoLoaderService) {
    this.videoData = service.loadVideos()
      .pipe(tap(data => this.firstVideo = data[0])); // why I no have firstVideo?


    console.log('firstVideo: ', this.firstVideo);
  }
}
