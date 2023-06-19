import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GmapService } from 'src/app/services/gmap.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements OnInit {

  @ViewChild('map', {static: true}) mapRef : ElementRef;
  googleMap : any;
  directionsService: any;
  directionsDisplay: any;

  items = ['kandy', 'digana', 'garden', 'campus', 'matale'];
  defaultLocation = {
    'kandy' : {lat : 111, lng: 9999},
    'digana' : {lat : 7.294234629656246, lng:  80.73766691507919},
    'campus' : {lat : 888, lng: 355},
    'matale' : {lat : 125353, lng: 35353},
    'garden' : {lat : 8869, lng: 3535},
  }

  constructor(
    private maps: GmapService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {}

  ngAfterViewInit(){
      this.loadMap()
  }

  async loadMap(defaultLocation = {lat: 7.293592742925397,lng:80.73792030359172}){

    try {
      console.log('map');
      let googleMaps: any = await this.maps.loadGoogleMaps();
      const mapEl = this.mapRef.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: { lat: 7.293592742925397,lng:80.73792030359172},
        disableDefaultUI: true,
        zoom: 10,
      });
      this.directionsService = new googleMaps.DirectionsService;
      this.directionsDisplay = new googleMaps.DirectionsRenderer;
      this.directionsDisplay = new googleMaps.DirectionsRenderer();

      const sourceIconUrl = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=O|FFFF00|000000';
      const destinationIconUrl = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=D|FF0000|000000';
      
      const source_position = new googleMaps.LatLng(7.281332962301607, 80.69637825060042);
      const destination_position = new googleMaps.LatLng(defaultLocation.lat, defaultLocation.lng);

      const source_icon = {
        url: sourceIconUrl,
        scaledSize: new googleMaps.Size(30, 40), // scaled size
        origin: new googleMaps.Point(0, 0), // origin
        anchor: new googleMaps.Point(0, 0) // anchor
      };
      const destination_icon = {
        url: destinationIconUrl,
        scaledSize: new googleMaps.Size(30, 40), // scaled size
        origin: new googleMaps.Point(0, 0), // origin
        anchor: new googleMaps.Point(0, 0) // anchor
      };
      const source_marker = new googleMaps.Marker({
        map: map,
        position: source_position,
        animation: googleMaps.Animation.DROP,
        icon: source_icon,
      });

      const destination_marker = new googleMaps.Marker({
        map: map,
        position: destination_position,
        animation: googleMaps.Animation.DROP,
        icon: destination_icon
      });

      source_marker.setMap(map);
      destination_marker.setMap(map);

      this.directionsDisplay.setMap(map);
      this.directionsDisplay.setOptions({
        polylineOptions: {
          strokeWeight: 6,
          strokeOpacity: 1,
          strokeColor: 'blue'
        },
        suppressMarkers: true
      });

      await this.drawPolyline(destination_position, source_position);

      map.setCenter(source_position);
      this.renderer.addClass(mapEl, 'visible');
    } catch(e) {
      console.log(e);
    }
  }

  drawPolyline(destination_position, source_position) {
    this.directionsService.route({
      origin: source_position,
      destination: destination_position,
      travelMode: 'DRIVING',
      provideRouteAlternatives: true
    }, (response, status ) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        console.log('response: ', response);
        const directionsData = response.routes[0].legs[0];
        const duration = directionsData.duration.text;
        console.log(duration);
      } else {
        console.log(status);
      }
    });

  }

  dropDown(parm : any){

    let selected = parm.detail.value;

    let defaultLocation = this.defaultLocation[selected]

    this.loadMap(defaultLocation)
  }

}
