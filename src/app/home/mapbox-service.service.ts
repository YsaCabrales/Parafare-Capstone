import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface MapboxOutput {
  attribution: string;
  features: Feature[];
  query: [];
}

export interface Feature {
  place_name: string;
}


@Injectable({
  providedIn: 'root'
})
export class MapboxServiceService {

  constructor(private http:HttpClient) { }

  search_word(query: string) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get(url + query + '.json?limit=3&bbox=121.028163,13.723587,121.108504,13.851841&access_token=' + environment.mapbox.accessToken)
    .pipe(map((res: MapboxOutput) => {
      return res.features;
    }))
  }

  locateCoordinates(lon, lat) {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get(url + lon + ', ' + lat
    + '.json?access_token=' + environment.mapbox.accessToken);
  }
}
