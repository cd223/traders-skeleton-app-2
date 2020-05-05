import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class ZoneWatcherService {

  onZoneError(error) {
    console.log('Error: ' + error);  
  }

  onZoneUnstable() {
    console.log('We are unstable');
    
  }

  onZoneStable() {
    console.log('We are stable');
  }

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(this.onZoneStable)
    this.ngZone.onUnstable.subscribe(this.onZoneUnstable)
    this.ngZone.onError.subscribe(this.onZoneError)
   }
}
