import { Component } from '@angular/core';
import { FilingTypeComponent } from '../filing-type/filing-type.component';
import { MonthComponent } from '../month/month.component';
import { YearComponent } from '../year/year.component';
import { SaleAmountComponent } from "../sale-amount/sale-amount.component";
import { TaxAmountComponent } from '../tax-amount/tax-amount.component';
import { SurchargeComponent } from '../surcharge/surcharge.component';
import { PenaltyComponent } from '../penalty/penalty.component';
import { TotalAmountComponent } from '../total-amount/total-amount.component';
import { ReviewConfirmComponent } from '../review-confirm/review-confirm.component';
import { get } from 'http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taxwork',
  standalone: true,
  imports: [
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    ReviewConfirmComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './taxwork.component.html',
  styleUrl: './taxwork.component.css'
})
export class TaxworkComponent {

  showReview: boolean = false;

  TaxData = {
    filingType: '0',
    Type:'',
    month: '',
    year: '',
    saleAmount: '',
    taxAmount: '',
    surcharge: '',
    penalty: 0,
    totalAmount: ''
  }

  get changeFiling(): boolean {
    return this.TaxData.filingType === '1'
  }

  calculateTax = 0
  amountValue: boolean = true

  onTaxAmount(tax: number) {
    this.calculateTax = tax
    this.TaxData.taxAmount = tax.toFixed(2)
    console.log(tax);
  }

  onPenaltyChange(val : number){
    this.TaxData.penalty = +val.toFixed(2)
  }

  onSurCharge(sur : number ){
    this.TaxData.surcharge = sur.toFixed(2)
  }

  onTotalAmountChange(total: number){
    this.TaxData.totalAmount = total.toFixed(2)
  }

  onNext(){
    this.showReview = true
  }

  onBack(){
    this.showReview = false
  }


  submitTax(): void {
  console.log("📦 Tax Data Model:", this.TaxData);

  // เช็คก่อนว่า jQuery และ modal ถูกโหลดจริง
  const modal = document.getElementById('jsonModal');
  if (modal) {
    ($('#jsonModal') as any).modal('show');
  } else {
    console.error("❌ ไม่พบ modal id='jsonModal' ใน DOM");
  }
}


}
