import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'htec-fe-zadatak';

  constructor(private carService: CarService) {}

  ngOnInit() {
    // this.carService.getAllCars();
    // this.carService.cars.subscribe(data => console.log(data));
  }
}
