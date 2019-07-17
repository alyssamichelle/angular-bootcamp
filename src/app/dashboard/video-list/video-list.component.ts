import { Video } from '../../../types';

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})

export class VideoListComponent {
  @Input() videoList: Video[];

  @Output() selectVideo = new EventEmitter<Video>();
  selected;

  pickVideo(video) {
    this.selectVideo.emit(video);

    this.selected = video;
    console.log('hello from the list comp');
  };


}
