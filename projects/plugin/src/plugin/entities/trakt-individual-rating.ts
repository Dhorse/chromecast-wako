import { Movie, Show, Episode} from '@wako-app/mobile-sdk';
import {traktids}  from './trakt-ids';
export  class traktindividualrating {
     rated_at?: string;
     rating?: number;
     ids?: traktids;

     constructor(){
         this.ids = new traktids;
     }
    public setIds( slug: string, trakt: number, tmdb: number, imbd: string, tvdb: number ) {
        this.ids.slug = slug;
        this.ids.trakt = trakt;
        this.ids.tmdb = tmdb;
        this.ids.imbd = imbd;
        this.ids.tvdb = tvdb;
    }
}