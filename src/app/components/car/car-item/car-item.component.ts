import { Component, OnInit, Input, EventEmitter, Output, HostListener, OnChanges } from '@angular/core';
import { Car } from 'src/app/model/car.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {

  @Input()
  public car: Car;

  @Input()
  public raceStarted: boolean;

  @Output()
  picked: EventEmitter<any> = new EventEmitter();

  public hover = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseover') onMouseOver() {
    this.hover = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.hover = false;
  }

  pickCar(car: Car): void {
    // console.log(car);
    this.picked.emit(car);
  }
}
