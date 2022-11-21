import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

@NgModule( {
	declarations: [
		AppComponent,
		PersonComponent
	],
	imports: [
    CommonModule,
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
} )
export class AppModule { }
