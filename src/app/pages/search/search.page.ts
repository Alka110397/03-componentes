import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  textoBuscar: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albumes =>{
      this.albums = albumes;
    });
  }

  onSearchChange(event){
    console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
