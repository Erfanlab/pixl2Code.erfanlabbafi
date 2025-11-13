import { Component, input, output, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider-menu',
  imports: [],
  templateUrl: './slider-menu.html',
  styleUrl: './slider-menu.scss',
  encapsulation:ViewEncapsulation.None
})
export class SliderMenu {

  title = input.required<string>()
  imgUrl = input<string>('')
  descrioption = input.required<string>()
  classlists = input<string>('');
  next = output<void>();
  prev = output<void>();

}

