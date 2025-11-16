import { Component, signal } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    class : 'relative flex justify-center items-center'
  }
})
export class App  {
}