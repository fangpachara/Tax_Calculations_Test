import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective , provideNgxMask} from 'ngx-mask'

@Component({
  selector: 'app-total-amount',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective
  ],
  templateUrl: './total-amount.component.html',
  styleUrl: './total-amount.component.css'
})
export class TotalAmountComponent implements OnChanges {
  @Input() taxAmount: string = ''
  @Input() surcharge: string = ''
  @Input() penalty: number = 0

  @Output() totalChange = new EventEmitter<number>()

  get total(): number{
    const taxnum = parseFloat(this.taxAmount)
    const surnum = parseFloat(this.surcharge)
    return taxnum + surnum + this.penalty
  }

  ngOnChanges(val : SimpleChanges) : void {
    this.totalChange.emit(this.total)
  }
    
}



