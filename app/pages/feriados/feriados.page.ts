import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Data } from '../interfaces/interfaces';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {


  data :Data[]=[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCabezera().subscribe(resp=>{
      console.log(resp)
      this.data.push(...resp.data);
    })
  }

}
