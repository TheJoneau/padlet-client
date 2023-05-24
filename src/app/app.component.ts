import { Component } from '@angular/core';
import {Padlet} from "./types/Padlet";

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html',

  styles: []
})
export class AppComponent {

  padlet: Padlet | undefined;

}
