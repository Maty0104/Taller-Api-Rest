import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaCabezera } from '../pages/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  getCabezera(){
    return this.httpclient.get<RespuestaCabezera>('https://api.victorsanmartin.com/feriados/en.json');
  }
}
