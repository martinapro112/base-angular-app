import { Component, Input, ViewEncapsulation } from '@angular/core';

export class AppPerson {
  firstName: string;
  lastName: string;
}

@Component( {
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  encapsulation: ViewEncapsulation.None
} )
export class PersonComponent {
  @Input() person: AppPerson;
}
