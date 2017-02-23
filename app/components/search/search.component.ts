import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/Artist';

@Component({
    selector: 'search',
    moduleId: module.id,
    templateUrl: 'search.component.html'
})
export class SearchComponent { 
    
    public searchStr:string;
    public searchRes: Artist[];
    
    constructor(private _spotifyService:SpotifyService) {

    }

    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            })
    }

}