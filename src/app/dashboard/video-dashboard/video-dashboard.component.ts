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

  constructor(service: VideoLoaderService) {
    this.videoData = service.loadVideos()
      .pipe(
        tap(data => this.video = data[0]),
      );

  }

  setVideo(video: Video) {
    this.video = video;
  }
}
