import { Component } from '@angular/core';
import { PEOPLE } from './data/people';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
} )
export class AppComponent {
	readonly people = PEOPLE;
}
