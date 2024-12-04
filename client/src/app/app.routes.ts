import { Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';

export const routes: Routes = [
    {path:'home', component:MainComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
];
