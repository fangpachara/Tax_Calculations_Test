import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Decimal from 'decimal.js';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-tax-amount',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective
  ],
  templateUrl: './tax-amount.component.html',
  styleUrl: './tax-amount.component.css'
})
export class TaxAmountComponent {

  @Input() value: string =''
  @Output() valueChange = new EventEmitter<string>()

  @Output() isValueChange = new EventEmitter<boolean>()
  @Input() saleTaxAmount: number = 0

  invalidText = ''



  onBlur(){
    const raw = parseFloat((this.value +'').replace(/,/g, '')||'0')
    const min = this.saleTaxAmount - 20
    const max = this.saleTaxAmount + 20

    if (raw < min || raw > max){
      this.invalidText = 'Invalid Tax'
      this.isValueChange.emit(false)
    }else{
      this.invalidText = ''
      this.isValueChange.emit(true)
    }

    this.valueChange.emit(this.value)


  }

  valueChangeTax(str : string){
    this.valueChange.emit(str)
  }

}
