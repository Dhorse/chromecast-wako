import { Component, Input, OnInit } from '@angular/core';
import { Movie, Show, Episode } from '@wako-app/mobile-sdk';
import { RatePopoverComponent } from '../components/rate-pop-over/rate-pop-over.component';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'wk-rate-button',
  templateUrl: './rate-button.component.html',
  styleUrls: ['./rate-button.component.scss']
})
export class RateButtonComponent implements OnInit {
  
  @Input() movie: Movie;
  @Input() show: Show;
  @Input() episode: Episode;
  @Input() type: 'button' | 'item-option' = 'button'; 

  constructor (
    private popoverCtrl: PopoverController
  ){}
  
  async ngOnInit() {
  }
  
  async rateOnTrakt(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: RatePopoverComponent,
      event: ev,
      componentProps: {
        movie : this.movie,
        show : this.show,
        episode : this.episode
      },
      translucent: true
    });
    return await popover.present();
  }
}
