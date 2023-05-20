import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PadletListView } from './views/PadletListView/PadletListView';
import {PadletDetailView} from "./views/PadletDetailView/PadletDetailView";
import { PadletListItemComponent } from './components/padlet-list-item/padlet-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PadletListView,
    PadletDetailView,
    PadletListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
