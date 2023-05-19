import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PadletListView } from './views/PadletListView/PadletListView';
import {PadletDetailView} from "./views/PadletDetailView/PadletDetailView";

@NgModule({
  declarations: [
    AppComponent,
    PadletListView,
    PadletDetailView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
