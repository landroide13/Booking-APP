import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Place } from 'src/app/models/place.model';
import { CreateBookingComponent } from 'src/app/pages/bookings/components/create-booking/create-booking.component';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place!: Place;

  constructor(private router: Router, 
              private navCtr: NavController,
              private route: ActivatedRoute,
              private placesServ: PlacesService, 
              private modalctr: ModalController,
              private actionSh:ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtr.navigateBack('/places/discover');
        return
      }
      this.place = this.placesServ.getPlace(paramMap.get('placeId')!)
    })
  }

  onBookPlace(){
    //this.router.navigateByUrl('/places/discover');
    //this.navCtr.navigateBack('/places/discover');
    this.actionSh.create({
      header: 'Choose an Action',
      buttons: [
        {
          text:'Select Date',
          handler: () => {
            this.openBookingModal('select')
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEle => {
      actionSheetEle.present()
    })
  }

  openBookingModal(mode: 'select' | 'random'){
    this.modalctr
      .create({ 
        component: CreateBookingComponent, 
        componentProps: { selectedPlace: this.place}
      }).then(modEl => {
      modEl.present();
      return modEl.onDidDismiss()
    }).then(res => {
      console.log(res.data, res.role)
      if(res.role === 'confirm'){
        console.log('Booked !!')
      }
    })
  }

}
