import { Component, OnInit } from '@angular/core';
import { CityService } from '../Service/city.service';
import { City } from '../Model/city.model';
import { State } from '../Model/state.model';
import { CommonService } from '../Service/common.service';
import { NotifierService } from 'angular-notifier';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city = new City();
  cities: City[];
  states: State[];

  constructor(private cts: CityService, private cs: CommonService, private ns: NotifierService) { }
  LoadStates() {
    this.cs.GetStates().subscribe(data => {
      this.states = data;
    });
  }

  LoadCities() {
    this.cts.getCities().subscribe(data => {
      this.cities = data;
    });
  }

  ngOnInit() {
    this.LoadStates();
    this.LoadCities();
  
  }

  editCity(cityinfo: City) {
    this.city = cityinfo;
    console.log(cityinfo);
  }

  SaveData(form: NgForm) {
    if (form.valid) {

      if (this.city.cityid > 0) {
        this.cts.UpdateCity(this.city.cityid, this.city).subscribe(data => {
          if (data == "error") {
            this.ns.notify('error', 'Please try again after sometime!');
          }
          else {
            this.ns.notify('success', 'city information updated.');
            this.LoadStates();
            this.LoadCities();
          }
        });
      }
      else {

        this.cts.AddCity(this.city).subscribe(data => {
          console.log(form);
          if (data == "error") {
            this.ns.notify('error', 'Please try again after sometime!');
          }
          else {
            
            this.ns.notify('success', 'city information saved.');
            this.LoadStates();
            this.LoadCities();
          }
        });
      }
    }
    else {
      this.ns.notify('error', 'Please enter proper details to save data.');
    }
  }

  deleteCity(id: number) {
    var op = confirm('Are you sure want to delete?');

    if (op) {
      this.cts.DeleteCity(id).subscribe(data => {
        console.log(data);
        this.ns.notify( 'success', 'city information deleted.' );
        this.LoadStates();
        this.LoadCities();
      });
    }

  }

}
