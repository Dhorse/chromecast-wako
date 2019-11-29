import { Component, Input, OnInit } from '@angular/core';
import { PopoverController, LoadingController } from '@ionic/angular';
import { Movie, Show, Episode } from '@wako-app/mobile-sdk';
import {ToastService} from '@wako-app/mobile-sdk';
import {TraktRatingObject}  from '../../entities/trakt-rating-object';
import {traktindividualrating}  from '../../entities/trakt-individual-rating';
import { ObjectUnsubscribedError } from 'rxjs';
/**
 *
 *
 * @export
 * @class RatePopoverComponent
 * @implements {OnInit}
 */
@Component({
  templateUrl: './rate-pop-over.component.html'
})

export class RatePopoverComponent implements OnInit {
    @Input() movie: Movie;
    @Input() show: Show;
    @Input() episode: Episode;
    
    object: TraktRatingObject;
    item: traktindividualrating;
    /**
     *Creates an instance of RatePopoverComponent.
     * @param {PopoverController} popoverCtrl
     * @param {ToastService} toastService
     * @memberof RatePopoverComponent
     */
    constructor(private popoverCtrl: PopoverController, private toastService: ToastService) {
        this.object = {
            movies: [],
            shows: [],
            episodes: [],
        }
        this.item = new traktindividualrating;       
    }

    async ngOnInit() {
        if(this.movie != undefined){
            this.item.setIds(this.movie.title, this.movie.traktId, this.movie.tmdbId, this.movie.imdbId, undefined)
        }
    }

    close() {
        this.popoverCtrl.dismiss();
    }

    selected(event){
        this.item.rating = +event.detail.value;
        this.item.rated_at = new Date().toISOString();
        this.object.movies.push(this.item);

        this.popoverCtrl.dismiss();
        this.statusmessege();
        this.sendRequest();
    }

    sendRequest(){
       
    }

    statusmessege(){
        console.log(this.object);
        console.log(JSON.stringify(this.object));
        this.filterObject();
        console.log(this.object);
        console.log(JSON.stringify(this.object));
        this.toastService.simpleMessage(this.item.ids.trakt + ' has been rated a ' + this.item.rating, "rate sent2", 2000);
    }


    //this is just done to remove any blank nodes.  cleans up our request.
    filterObject(){
        Object.keys(this.object).forEach(k => (!this.object[k] || this.object[k] === undefined || this.object[k] === '' || this.object[k].length === 0) && delete this.object[k]);
    }
}
