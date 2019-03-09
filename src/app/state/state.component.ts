import { Component, OnInit } from '@angular/core';
import { NgForm } from '.../../node_modules/@angular/forms';
import {State} from '../Model/state.model';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {



  states: State[];
  state: State = new State();

  constructor(private cs: CommonService) {

  }

  editState(stateinfo:State) {
    this.state = stateinfo;
  }


  LoadStates() {
    this.cs.GetStates().subscribe(data => {
      this.states = data;
    });
  }

  ngOnInit() {
    this.LoadStates();
  }

  SaveData(form) 
  {  console.log(form);
    if (form.valid) 
    {

      if (this.state.stateid > 0)
      {
        this.cs.UpdateState(this.state.stateid, this.state).subscribe(data => {
          if (data == "error") {
            alert('Please try again after sometime.')
          }
          else {
            alert(data);
            this.LoadStates();
          }
        });
      }
      
      else {

        this.cs.AddState(this.state).subscribe(data => {
          if (data == "error") 
          {
            console.log(data);
            alert(data);
          }
          else {
            alert(data);
            this.LoadStates();
          }
        });
      }
    }

  }

  deleteState(id: number) {
    var op = confirm('Are you sure want to delete?');

    if (op) {
      this.cs.DeleteState(id).subscribe(data => {
        alert(data.statename +' deleted successfully.');
        this.LoadStates();
      });
    }

  }

}
