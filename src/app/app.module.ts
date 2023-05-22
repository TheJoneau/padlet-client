import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PadletListView } from './views/PadletListView/PadletListView';
import {PadletDetailView} from "./views/PadletDetailView/PadletDetailView";
import { PadletListItemComponent } from './components/padlet-list-item/padlet-list-item.component';

import { HttpClientModule } from '@angular/common/http';
import {PadletStoreService} from "./shared/padlet-store.service";
import {CreatePadletView} from "./views/CreatePadletView/CreatePadletView";
import {CreateEntryView} from "./views/CreateEntryView/CreateEntryView";
import {EntryStoreService} from "./shared/entry-store-service";
import {RoleStoreService} from "./shared/role-store-service";
import {UserStoreService} from "./shared/user-store-service";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PadletListView,
    PadletDetailView,
    PadletListItemComponent,
    CreatePadletView,
    CreateEntryView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PadletStoreService,
    EntryStoreService,
    RoleStoreService,
    UserStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
