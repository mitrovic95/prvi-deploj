import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Car } from 'src/app/model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public cars: Subject<Car[]> = new Subject();
  getCarsUrl = 'http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4';

  constructor(private http: HttpClient) { }

  getAllCars() {
    this.http.get(this.getCarsUrl)
    .subscribe((dataObj: any) => {
      this.cars.next(dataObj.data);
    });
  }
}
