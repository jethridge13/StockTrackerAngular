import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input() title = '';
  @Input() subtitle = '';

  settings = true;
  showDelete = false;
  loading = false;
  cardName = 'New Stock Card';
  symbols = [
    {'symbol': ''}
  ];

  createStockCardForm = new FormGroup({
    name: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  createCard(): void {
    this.loading = true;
    this.settings = false;
    const form = this.createStockCardForm.value;
  }

  addLine(): void {
    this.symbols.push({'symbol': ''});
  }

  handleDelete(event: MouseEvent): void {
    let index = (<HTMLElement>event.target).getAttribute('data-index');
    if (!index) {
      index = (<HTMLElement>event.target).parentElement.getAttribute('data-index');
    }
    this.deleteLine(index);
  }

  deleteLine(index): void {
    this.symbols.splice(index, 1);
  }

  showDeletePrompt(): void {
    this.showDelete = true;
  }

  updateTitle(event: KeyboardEvent): void {
    let value = (<HTMLInputElement>event.target).value;
    if (value === '') {
      value = 'New Stock Card';
    }
    this.cardName = value;
  }

}
