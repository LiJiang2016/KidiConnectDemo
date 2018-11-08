import { Component, Input } from '@angular/core';

/**
 * Generated class for the ActionbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'actionbar',
  templateUrl: 'actionbar.html'
})
export class ActionbarComponent {

  @Input('title') title: string;

  constructor() {
  }

}
