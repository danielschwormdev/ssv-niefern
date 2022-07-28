import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from "./start-page/start-page.component";
import {AboutComponent} from "./about/about.component";
import {CurrentComponent} from "./current/current.component";
import {ShootingComponent} from "./shooting/shooting.component";
import {SocietyComponent} from "./society/society.component";

const routes: Routes = [
	{path: 'start-page', component: StartPageComponent},
	{path: 'about', component: AboutComponent},
	{path: 'current', component: CurrentComponent},
	{path: 'shooting', component: ShootingComponent},
	{path: 'society', component: SocietyComponent},
	{path: '', redirectTo: '/start-page', pathMatch: 'full'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
