import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input() title = 'New Stock Card';
  @Input() subtitle = '';

  settings = true;
  showDelete = false;
  loading = false;

  stockCardForm: FormGroup;
  stocks: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.stockCardForm = this.fb.group({
      cardName: '',
      stocks: this.fb.array([this.createStock()])
    });
  }

  createCard(): void {
    this.loading = true;
    this.settings = false;
    const form = this.stockCardForm.value;

    this.title = form.cardName;
  }

  editCard(): void {
    this.settings = true;
  }

  addStock(): void {
    this.stocks = this.stockCardForm.get('stocks') as FormArray;
    this.stocks.push(this.createStock());
  }

  createStock(): FormGroup {
    return this.fb.group({
      symbol: ''
    });
  }

  addLine(): void {
    this.addStock();
  }

  handleDelete(event: MouseEvent): void {
    let index = (<HTMLElement>event.target).getAttribute('data-index');
    if (!index) {
      index = (<HTMLElement>event.target).parentElement.getAttribute('data-index');
    }
    this.deleteLine(index);
  }

  deleteLine(index): void {
    this.stocks = this.stockCardForm.get('stocks') as FormArray;
    this.stocks.removeAt(index);
  }

  showDeletePrompt(): void {
    this.showDelete = true;
  }

  updateTitle(event: KeyboardEvent): void {
    let value = (<HTMLInputElement>event.target).value;
    if (value === '') {
      value = 'New Stock Card';
    }
    this.title = value;
  }

}
