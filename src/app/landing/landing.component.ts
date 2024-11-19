import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FetchJsonService } from '../fetch-json.service';
import { Skills } from '../shared/interfaces';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgFor],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  tiles: Skills[] = [];

  constructor(private jsonService : FetchJsonService) {}

  ngOnInit() {
    this.jsonService.getData('../assets/json/skills.json').subscribe({
      next: (data) => {
        this.tiles = data;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }

}
