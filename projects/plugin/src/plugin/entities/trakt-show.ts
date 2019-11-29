import { Movie} from '@wako-app/mobile-sdk';
import {traktids}  from './trakt-ids';
import {traktseasons}  from './trakt-season';
export declare class traktshows {
     rated_at?: string;
     rating?: number;
     title?: string;
     year?: number;
     ids?: traktids;
     seasons?: traktseasons[];
}