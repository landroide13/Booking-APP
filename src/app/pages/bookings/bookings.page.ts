import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Booking } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[] = [];

  constructor(private bookingServ: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingServ.bookings
  }

  onCancel(id: string, slidingBooking: IonItemSliding){
    slidingBooking.close();
    
  }

}
