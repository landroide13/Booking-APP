import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _bookings: Booking[] = [
    {
      id:"b1",
      placeId: "p1",
      placeTitle: "Manhattan Mansion",
      guessNumber: 4,
      userId:'u2'
    }
  ];

  constructor() { }

  get bookings(){
    return [...this._bookings]
  }
}
