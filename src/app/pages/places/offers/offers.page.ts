import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../services/places.service';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[] = []

  constructor(private placesServ: PlacesService) { }

  ngOnInit() {
    this.offers = this.placesServ.places
  }

}
