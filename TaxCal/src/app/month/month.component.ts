import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-month',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './month.component.html',
  styleUrl: './month.component.css'
})
export class MonthComponent {

  @Input() value: string =''
  @Output() valueChange = new EventEmitter<string>()

  @Input() year : string = ''


  months = [
    {value:'01', label: 'January',number:1 },
    {value:'02', label: 'February',number:2 },
    {value:'03', label: 'March',number:3 },
    {value:'04', label: 'April',number:4 },
    {value:'05', label: 'May',number:5 },
    {value:'06', label: 'June',number:6 },
    {value:'07', label: 'July',number:7 },
    {value:'08', label: 'August',number:8 },
    {value:'09', label: 'September',number:9 },
    {value:'10', label: 'October',number:10 },
    {value:'11', label: 'November',number:11 },
    {value:'12', label: 'December',number:12 },
  ]

  onChange(event: Event){
    const selected = (event.target as HTMLSelectElement).value;
    this.valueChange.emit(selected) 
  }

  isDisabled(monthNum: number): boolean {
    const selectYear = +this.year
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()+1

    if(!selectYear) return true

    if(selectYear > currentYear) return true

    if(selectYear === currentYear){
      return monthNum > currentMonth
    }
    return false;
  }

}
