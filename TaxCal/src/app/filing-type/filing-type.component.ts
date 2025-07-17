import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filing-type',
  standalone: true,
  imports: [],
  templateUrl: './filing-type.component.html',
  styleUrl: './filing-type.component.css'
})
export class FilingTypeComponent {

  @Input() value: string = '0'
  @Output() valueChange = new EventEmitter<string>()

  onchange(val: string) {
    this.value = val
    this.valueChange.emit(val)

  }
}


