import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { StockRequestService } from '../stock-request.service';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  // Inputs
  @Input() title = 'New Stock Card';

  // State
  settings = true;
  showDelete = false;
  loading = false;

  // Form
  stockCardForm: FormGroup;
  stocks: FormArray;

  constructor(private fb: FormBuilder, private srr: StockRequestService) { }

  ngOnInit() {
    this.stockCardForm = this.fb.group({
      cardName: '',
      stocks: this.fb.array([this.createStock()])
    });
  }

  createCard(): void {
    this.loading = true;
    this.settings = false;
    console.log(this.stockCardForm);
    if (this.stockCardForm.value.cardName === '') {
      this.stockCardForm.value.cardName = 'New Stock Card';
    }
    const form = this.stockCardForm.value;

    this.title = form.cardName;
    this.requestStocks(form.stocks.map(s => s.symbol));
  }

  requestStocks(stocks: String[]) {
    this.srr.getStocks(stocks)
    .subscribe((data) => {
      console.log(data);
      this.loading = false;
    });
  }

  editCard(): void {
    if (this.stockCardForm.value.cardName === '') {
      this.title = 'New Stock Card';
    }
    this.settings = true;
    console.log(this.stockCardForm);
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
