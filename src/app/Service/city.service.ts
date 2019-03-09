import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {City} from '../Model/city.model';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  getCities():Observable<City[]>
  {
      return this.http.get<City[]>('http://localhost:60021/api/citie');
  }

  getCitiesByState(stateid:number):Observable<City[]>
  {
    return this.http.get<City[]>('http://localhost:60021/api/citie/'+stateid);
  }

  AddCity(city:City):Observable<string>
  {
     return this.http.post<string>('http://localhost:60021/api/citie',city)
  }

  UpdateCity(id:number,city:City):Observable<string>
  {
     return this.http.put<string>('http://localhost:60021/api/citie/'+id,city)
  }

  DeleteCity(id:number):Observable<any>
  {
     return this.http.delete<any>('http://localhost:60021/api/citie/'+id)
  }
}
