import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { State } from '../Model/state.model';
import { CommonService } from '../Service/common.service';
import { City } from '../Model/city.model';
import { CityService } from '../Service/city.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[CityService,CommonService]
})
export class UserComponent implements OnInit {

  userForm:FormGroup;
  states: State[];
  cities: City[];
  constructor(private fb:FormBuilder,private cs: CommonService,private ct:CityService) { }

  LoadStates() {
    this.cs.GetStates().subscribe(data => {
      this.states = data;
    });
  }

  LoadCities(id:number) {
    console.log(id);    
    this.ct.getCitiesByState(id).subscribe(data => {
      
      console.log(data);

      this.cities = data;
    });
  }

  ngOnInit(): void
  {
    this.createForm();
    this.LoadStates();
  
  }
  
  createForm() {
    this.userForm = this.fb.group({
      uname: ['',Validators.required],
      uemail: ['',Validators.required],
      upass: ['',Validators.required],
      usid: [''],
      ucid: [''],
      isActive: ['']
    })
  }



}
