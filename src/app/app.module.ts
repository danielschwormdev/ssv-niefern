import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import {HeaderComponent} from './header/header.component';
import {StartPageComponent} from './start-page/start-page.component';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './footer/footer.component';
import {CurrentComponent} from './current/current.component';
import {ShootingComponent} from './shooting/shooting.component';
import {SocietyComponent} from './society/society.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		StartPageComponent,
		AboutComponent,
		FooterComponent,
		CurrentComponent,
		ShootingComponent,
		SocietyComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
