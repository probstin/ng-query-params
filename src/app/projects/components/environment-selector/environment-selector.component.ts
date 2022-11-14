import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-environment-selector',
  templateUrl: './environment-selector.component.html',
  styleUrls: ['./environment-selector.component.scss']
})
export class EnvironmentSelectorComponent {

  @Input() environments!: any;
  @Input() selectedEnvironment!: any;

  @Output() environmentSelected = new EventEmitter<any>();

  constructor() { }

  selectionChanged() {
    this.environmentSelected.emit(this.selectedEnvironment);
  }

}
