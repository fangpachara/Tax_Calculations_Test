import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective , provideNgxMask} from 'ngx-mask'

@Component({
  selector: 'app-surcharge',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective
  ],
  templateUrl: './surcharge.component.html',
  styleUrl: './surcharge.component.css'
})
export class SurchargeComponent implements OnChanges  {
  
  @Input() taxAmount: string = ''
  @Output() surchargeChange = new EventEmitter<number>()


  get surcharge() : number {
    const raw = (this.taxAmount || 0).toString();
    const num = raw.replace(/,/g, '')
    const tax = parseFloat(num)
    const sur = Math.round(tax*0.1*1000)/1000
    return sur
    

  }
  ngOnChanges(val : SimpleChanges) : void {
        this.surchargeChange.emit(this.surcharge)
    }

  

}
