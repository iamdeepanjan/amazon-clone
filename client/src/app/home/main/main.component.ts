import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-main',
  imports: [BannerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
