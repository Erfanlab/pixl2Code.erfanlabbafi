import { Component, output } from '@angular/core';

@Component({
  selector: 'app-lost-conection',
  imports: [],
  templateUrl: './lost-conection.html',
  styleUrl: './lost-conection.css'
})
export class LostConection {
  gotohome = output<void>();
}
