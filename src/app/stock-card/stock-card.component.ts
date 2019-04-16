import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input() title = '';
  @Input() subtitle = '';

  showDelete = false;

  constructor() { }

  ngOnInit() {
  }

  showDeletePrompt(): void {
    this.showDelete = true;
  }

}
