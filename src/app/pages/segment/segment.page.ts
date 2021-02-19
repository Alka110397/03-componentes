import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  buscarCasa: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event){
    this.superHeroes = null;
    this.superHeroes = this.dataService.getHeroes();
    console.log(event.detail.value);
    this.buscarCasa = event.detail.value;
  }

}
