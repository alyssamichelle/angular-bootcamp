import { Video } from '../../../types';

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})

export class VideoListComponent implements OnChanges {
  @Input() videoList: Video[];

  @Output() selectVideo = new EventEmitter<Video>();
  selected;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    // tslint:disable-next-line: no-string-literal
    if (changes['videoList'].currentValue && !this.selected) {
      // tslint:disable-next-line: no-string-literal
      this.pickVideo(changes['videoList'].currentValue[0]);
    }
  }
  
  pickVideo(video) {
    this.selectVideo.emit(video);
    this.selected = video;
  };


}
