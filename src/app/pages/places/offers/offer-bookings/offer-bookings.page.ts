import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place!: Place;

  constructor(private route: ActivatedRoute,
              private navCtr: NavController,
              private placesServ: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtr.navigateBack('/places/offers');
        return
      }

      this.place = this.placesServ.getPlace(paramMap.get('placeId')!)
    })
  }

}
