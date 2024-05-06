import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../services/places.service';
import { Place } from 'src/app/models/place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[] = []

  constructor(private placesServ: PlacesService, private route: Router) { }

  ngOnInit() {
    this.offers = this.placesServ.places
  }

  onEdit(id: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.route.navigate(['/', 'places', 'offers', 'edit', id])
  }

}
