import { Component } from '@angular/core';
import { FilingTypeComponent } from '../filing-type/filing-type.component';
import { MonthComponent } from '../month/month.component';
import { YearComponent } from '../year/year.component';
import { SaleAmountComponent } from "../sale-amount/sale-amount.component";

@Component({
  selector: 'app-taxwork',
  standalone: true,
  imports: [
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent
],
  templateUrl: './taxwork.component.html',
  styleUrl: './taxwork.component.css'
})
export class TaxworkComponent {

  TaxData = {
    filingType: '0',
    month: '',
    year: '',
    saleAmount: '',
    taxAmount:0,
    penalty: 0,
    totalAmount:0
  }

 


  onTaxAmountChange(tax: number){
    this.TaxData.taxAmount = tax;
  }

}
