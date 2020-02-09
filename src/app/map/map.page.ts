import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  latitude: any;
  longitude: any;

  
  @ViewChild('mapElement', { static: true }) mapNativeElement: ElementRef<HTMLDivElement>;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };
  
  
  constructor(private geolocation: Geolocation,private fb: FormBuilder) { 

    this.createDirectionForm();
  }

  ngOnInit() {
  }
  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      // this.latitude = resp.coords.latitude;
      // this.longitude = resp.coords.longitude;
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
    });
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 16
      });
      this.directionsDisplay.setMap(map);
    
      /*location object*/
      const pos = {
        lat: 1.3693, lng: 103.8483
      };
      map.setCenter(pos);
      const icon = {
        url: 'assets/icon/shop.png', // image url
        scaledSize: new google.maps.Size(50, 50), // scaled size
      };
      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Hello World!',
        icon: icon
      });
      const contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h1 id="firstHeading" class="firstHeading"></h1>' +
      '<div id="bodyContent">' +
      '<img src="assets/icon/gg.png" width="200">' +
      '<p><b>OTW </b> Best shopping experience u never had</p>' +
      ' '
      +'<a href="home">Shop Now</a>'
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }

  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: this.currentLocation,
      destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


}
