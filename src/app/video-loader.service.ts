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

  // const videoData: Video[];
  // const videoData: Video[] = [
  //   {
  //     "title": "Angular Observable Data Flow",
  //     "author": "Kyle Cordes",
  //     "id": "JPuqluYYa-o",
  //     "viewDetails": [
  //       {
  //         "age": 17,
  //         "region": "North America",
  //         "date": "2016-03-23"
  //       },
  //       {
  //         "age": 27,
  //         "region": "North America",
  //         "date": "2016-03-23"
  //       },
  //       {
  //         "age": 37,
  //         "region": "North America",
  //         "date": "2016-03-23"
  //       },
  //       {
  //         "age": 47,
  //         "region": "Europe",
  //         "date": "2016-03-24"
  //       },
  //       {
  //         "age": 37,
  //         "region": "North America",
  //         "date": "2016-03-24"
  //       },
  //       {
  //         "age": 17,
  //         "region": "North America",
  //         "date": "2016-03-25"
  //       }
  //     ]
  //   },
  //   {
  //     "title": "Angular Performance Checklist",
  //     "author": "Paul Spears",
  //     "id": "cxqRijt9LbQ",
  //     "viewDetails": [
  //       {
  //         "age": 36,
  //         "region": "North America",
  //         "date": "2016-06-23"
  //       },
  //       {
  //         "age": 30,
  //         "region": "North America",
  //         "date": "2016-06-23"
  //       },
  //       {
  //         "age": 54,
  //         "region": "North America",
  //         "date": "2016-07-23"
  //       },
  //       {
  //         "age": 43,
  //         "region": "Europe",
  //         "date": "2016-0-24"
  //       },
  //       {
  //         "age": 32,
  //         "region": "North America",
  //         "date": "2016-08-24"
  //       },
  //       {
  //         "age": 32,
  //         "region": "North America",
  //         "date": "2016-08-25"
  //       }
  //     ]
  //   },
  //   {
  //     "title": "Live App Updates Without The App Store",
  //     "author": "Sani Yusuf",
  //     "id": "s10wrXA-a7Y",
  //     "viewDetails": [
  //       {
  //         "age": 17,
  //         "region": "North America",
  //         "date": "2016-03-23"
  //       },
  //       {
  //         "age": 27,
  //         "region": "North America",
  //         "date": "2016-03-23"
  //       },
  //       {
  //         "age": 37,
  //         "region": "North America",
  //         "date": "2016-03-23"
  //       },
  //       {
  //         "age": 47,
  //         "region": "Europe",
  //         "date": "2016-03-24"
  //       },
  //       {
  //         "age": 37,
  //         "region": "North America",
  //         "date": "2016-03-24"
  //       },
  //       {
  //         "age": 17,
  //         "region": "North America",
  //         "date": "2016-03-25"
  //       }
  //     ]
  //   },
  //   {
  //     "title": "Angular Reactive Forms",
  //     "author": "Jack Balbes",
  //     "id": "A_Rq6ZsoXpI",
  //     "viewDetails": [
  //       {
  //         "age": 36,
  //         "region": "North America",
  //         "date": "2016-06-23"
  //       },
  //       {
  //         "age": 30,
  //         "region": "North America",
  //         "date": "2016-06-23"
  //       },
  //       {
  //         "age": 54,
  //         "region": "North America",
  //         "date": "2016-07-23"
  //       },
  //       {
  //         "age": 43,
  //         "region": "Europe",
  //         "date": "2016-0-24"
  //       },
  //       {
  //         "age": 32,
  //         "region": "North America",
  //         "date": "2016-08-24"
  //       },
  //       {
  //         "age": 32,
  //         "region": "North America",
  //         "date": "2016-08-25"
  //       }
  //     ]
  //   },
  //   {
  //     "title": "Imperative to Reactive with Angular and RxJS",
  //     "author": "John Baur",
  //     "id": "VJOPsjlbhdg",
  //     "viewDetails": [
  //       {
  //         "age": 17,
  //         "region": "North America",
  //         "date": "2016-03-23"
  //       },
  //       {
  //         "age": 27,
  //         "region": "North America",
  //         "date": "2016-03-23"
  //       },
  //       {
  //         "age": 37,
  //         "region": "North America",
  //         "date": "2016-03-23"
  //       },
  //       {
  //         "age": 47,
  //         "region": "Europe",
  //         "date": "2016-03-24"
  //       },
  //       {
  //         "age": 37,
  //         "region": "North America",
  //         "date": "2016-03-24"
  //       },
  //       {
  //         "age": 17,
  //         "region": "North America",
  //         "date": "2016-03-25"
  //       }
  //     ]
  //   }
  // ];


  constructor(private http: HttpClient) { }

  loadVideos() {
    // return this.videoData; // how do I wrap this in an observable

    // how do I say, if this fails return the fake data vv

    return this.http.get<Video[]>(this.apiUrl + '/videos');
      // .pipe(
      //   tap(data => console.log('BEFORE: ', data)),
      //   map(videos => videos.slice(0, 1)),
      //   tap( data => console.log('AFTER: ', data))
      // );

  }
}
