import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './year.component.html',
  styleUrl: './year.component.css'
})
export class YearComponent {

  @Input() value: string =''
  @Output() valueChange = new EventEmitter<string>()

  years : String[] = []

  constructor(){
    const currentYear = new Date().getFullYear()
    for ( let y = 2020; y <= currentYear; y++){
      this.years.push(y.toString())
    }
  }

  onChange(event: Event){
    const selected = (event.target as HTMLSelectElement).value;
    this.valueChange.emit(selected) 
  }
}
