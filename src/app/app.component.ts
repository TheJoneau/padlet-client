import { Component } from '@angular/core';
import {Padlet} from "./types/Padlet";

@Component({
  selector: 'pl-root',
  template: `
    <pl-padlet-list-view *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></pl-padlet-list-view>
    <pl-padlet-detail-view *ngIf="detailsOn" [padlet]="padlet" (showListEvent)="showList()"></pl-padlet-detail-view>
    `,
  styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  padlet: Padlet | undefined;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(padlet: Padlet){
    this.padlet = padlet;
    this.listOn = false;
    this.detailsOn = true;
  }
}
