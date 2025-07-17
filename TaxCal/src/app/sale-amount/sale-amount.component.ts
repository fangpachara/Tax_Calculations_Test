import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective , provideNgxMask} from 'ngx-mask'
import Decimal from 'decimal.js'

@Component({
  selector: 'app-sale-amount',
  standalone: true,
  imports: [
    CommonModule,
    NgxMaskDirective,
    FormsModule
  ],
  providers:[provideNgxMask()],
  templateUrl: './sale-amount.component.html',
  styleUrl: './sale-amount.component.css'
})
export class SaleAmountComponent {

  @Input() value: string =''
  @Output() valueChange = new EventEmitter<string>()
  @Output() taxAmountChange = new EventEmitter<number>()


  onBlur(){
    const raw = new Decimal(this.value.replace(/,/g, '')||'0')
    const tax = raw.mul(0.07).toDecimalPlaces(3);
    this.taxAmountChange.emit(+tax)
  }


}
