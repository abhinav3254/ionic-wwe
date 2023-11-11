import { Component, OnInit } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  jsonData: Wrestlers[] = [];

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data) => {
      this.jsonData = data as Wrestlers[];
      console.log(this.jsonData);
    });
  }
}



export interface Wrestlers {
  name: string
  total_matches: number
  signature_moves: string[]
  image: string
  description: string
}
