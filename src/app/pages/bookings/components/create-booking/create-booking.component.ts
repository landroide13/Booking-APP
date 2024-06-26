import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent  implements OnInit {

  @Input() selectedPlace!: Place;

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {}

  onBookPlace(){
    this.modalCtr.dismiss({ message: 'Dummy Message'}, 'confirm');
  }

  onClose(){
    this.modalCtr.dismiss(null, 'Cancel');
  }

}
