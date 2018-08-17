import { Component, OnInit } from '@angular/core';
import {CarService} from '../../../services/car.service';
import { Car } from 'src/app/model/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  public cars = [];
  public searchResult = [];
  public carsForRace = new Set();
  public isOpen: boolean;
  public car: Car;
  public hoveredRow: number;
  public raceStarted = false;
  public firstPlace: Car;
  public secondPlace: Car;
  public thirdPlace: Car;

  constructor (private carService: CarService) { }

  ngOnInit() {
    this.carService.cars.subscribe((cars) => {
      this.cars = cars;
      this.searchResult = this.cars;
    });
    this.carService.getAllCars();
  }

  filterCars(query: string) {
    this.searchResult = [];

    this.cars.forEach((car) => {
      if (car.name.startsWith(query) || car.name.toLowerCase().startsWith(query)) {
        this.searchResult.push(car);
      }
    });
  }

  carForRace(event: any): void {
    this.carsForRace.add(event);
  }

  showButton(index: number): void {
    this.hoveredRow = index;
  }

  hideButton(): void {
    this.hoveredRow = null;
  }

  private startRace(carsForRace: Set<Car>): void {
    this.raceStarted = true;
    const arrayOfCars = Array.from(carsForRace);
    arrayOfCars.sort(function(a, b) {
      return b.speed - a.speed;
    });

    if (arrayOfCars.length === 2) {
      this.firstPlace = arrayOfCars[0];
      this.secondPlace = arrayOfCars[1];
    }

    if (arrayOfCars.length >= 3) {
      this.firstPlace = arrayOfCars[0];
      this.secondPlace = arrayOfCars[1];
      this.thirdPlace = arrayOfCars[2];
    }
  }
}
