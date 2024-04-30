import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place!: Place;

  constructor( private route: ActivatedRoute, 
              private placesServ: PlacesService, 
              private navCtr: NavController) { }

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
