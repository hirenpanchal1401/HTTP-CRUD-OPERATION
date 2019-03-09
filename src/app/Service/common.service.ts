import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {State} from '../Model/state.model';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private client:HttpClient) { }

  GetStates():Observable<State[]>
  {
   return this.client.get<State[]>('http://localhost:60021/Api/state');
  }

  AddState(state:State):Observable<string>
  {
     return this.client.post<string>('http://localhost:60021/Api/state',state);
  }

  UpdateState(id:number,state:State):Observable<string>
  {
     return this.client.put<string>('http://localhost:60021/Api/state/'+id,state)
  }

  DeleteState(id:number):Observable<any>
  {
     return this.client.delete<any>('http://localhost:60021/Api/state/'+id)
  }
  
}
