import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-slider-menu',
  imports: [],
  templateUrl: './slider-menu.html',
  styleUrl: './slider-menu.scss'
})
export class SliderMenu {

  title = input.required<string>()
  imgUrl = input<string>('')
  descrioption = input.required<string>()

  next = output<void>()

}

