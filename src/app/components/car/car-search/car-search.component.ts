import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor (private element: ElementRef) { }

  ngOnInit() {
  }

  public emitSearchQuery(value: any) {
    this.onSearch.emit(value);
  }

}
