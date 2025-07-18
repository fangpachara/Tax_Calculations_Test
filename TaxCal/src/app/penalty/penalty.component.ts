import { CommonModule } from '@angular/common';
import { Component, Input, Output,  EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective , provideNgxMask} from 'ngx-mask'

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective
  ],
  templateUrl: './penalty.component.html',
  styleUrl: './penalty.component.css'
})
export class PenaltyComponent {
  readonly penalty = 200

  @Input() taxAmount: number = 0
  @Output()  penaltyChange = new EventEmitter<number>()

  ngOnInit(){
    this.penaltyChange.emit(this.penalty)
  }
  
    get penaltyShow(): string {
      return this.penalty.toFixed(2)
    }
}
